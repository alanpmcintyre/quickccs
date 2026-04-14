# QuickCCS — Claude Code Context

## What This Project Is

QuickCCS is a single-file HTML clinical decision support tool for HSE Common Conditions Service (CCS) pharmacy consultations in Ireland. It guides pharmacists through structured question pathways to determine whether a patient is suitable for treatment under the CCS, needs referral, or requires emergency assessment.

Deployed at: https://quickccs.netlify.app

---

## Critical Constraint

**This is a single HTML file. There is no build step, no npm, no bundler, no framework.**

All CSS, HTML, and JavaScript live in `index.html`. Do not introduce external dependencies, split files, or suggest a build pipeline. Any change must be made within the single file. This constraint is intentional and permanent for the current version.

---

## File Structure

The file is ~2,300 lines divided into logical sections:

```
<style>            — All CSS (responsive, print styles included)
<body>             — Static HTML shell (screens, header, pt bar)
<script id="ccs-conditions">   — Condition data, step definitions, clinical logic
<script id="ccs-render">       — All UI rendering functions
<script id="ccs-logic">        — App state, navigation, input handlers, login/logout
```

**Rule:** Keep changes in the correct script block. Clinical data and question definitions belong in `ccs-conditions`. Rendering HTML strings belongs in `ccs-render`. Navigation and state mutations belong in `ccs-logic`.

---

## App State

All state is held in plain JS variables in `ccs-logic`:

```js
var answers     = {};  // Accumulated consultation answers (keyed by step id)
var cbState     = {};  // Checkbox state per step id
var currentStep = 0;   // Index into current condition's steps array
var activeCond  = 'oral_thrush';  // Currently selected condition key
var pharmacist  = {};  // Pharmacist details — persists across consultations in a session
```

Answers are keyed by `step.id`. Patient fields are prefixed `pt_` (e.g. `pt_fname`, `pt_dob`, `pt_sex`). Pharmacist fields are prefixed `ph_` (e.g. `ph_psi`, `ph_pharmacy`).

---

## Screens

The app uses a simple show/hide screen system. Only one screen is visible at a time:

| Screen ID    | Purpose                                      |
|-------------|----------------------------------------------|
| `landing`   | Welcome / disclaimer                         |
| `login`     | Pharmacist login form                        |
| `dash`      | Condition selector dashboard                 |
| `overview`  | Condition overview before consultation starts |
| `consult`   | Step-by-step consultation wizard             |
| `result`    | Final consultation summary and prescription  |

`showScreen(id)` switches screens and manages the patient bar visibility and body padding.

---

## Condition Architecture

Each condition is an object inside the `CONDITIONS` object in `ccs-conditions`:

```js
CONDITIONS = {
  condition_key: {
    name: 'Display Name',
    icon: '🔬',
    overview: {
      description: 'Pathway description shown before consultation starts.',
      symptoms: ['...'],     // Common symptoms (shown as inclusion criteria)
      exclusions: ['...']    // Key exclusions (shown in red)
    },
    steps: [ /* see Step structure below */ ],
    getOutcome: function(answers) { return { type, reason, rx, instructions, extra, safety }; }
  }
}
```

### Dashboard Registration

Conditions must also be registered in one of two arrays in `ccs-conditions`:

```js
var AVAILABLE_CONDITIONS  = ['oral_thrush', 'conjunctivitis', 'uti'];   // Live, selectable
var COMING_SOON_CONDITIONS = ['vv_thrush', 'impetigo', 'allergic_rhinitis', 'shingles']; // Greyed out
```

And in `CONDITION_CARDS` for display metadata:

```js
var CONDITION_CARDS = {
  condition_key: { icon: '🔬', name: 'Display Name' }
};
```

To publish a new module: add its key to `AVAILABLE_CONDITIONS` and remove it from `COMING_SOON_CONDITIONS`.

---

## Step Structure

Each step in a condition's `steps` array follows this shape:

```js
{
  id: 'step_id',               // Used as the key in answers{}
  section: 'Section label',    // Shown as the step section header
  type: 'single',              // 'patient' | 'single' | 'checkbox'
  progress: 50,                // Progress bar fill percentage (0–100)
  q: 'Question text?',         // Question shown to user
  sub: 'Optional sub-text.',   // Optional clarifying text below the question
  opts: ['No', 'Yes'],         // Options array — can be a function(answers) returning array
  title: 'OVERRIDE LABEL',     // Optional: overrides section label display
  isDifferentialDiagnosis: true, // Optional: replaces section label with 'DIFFERENTIAL DIAGNOSIS'
  femaleOnly: true,            // Optional: step is skipped for Male patients
  skip: function(answers) {    // Optional: return true to skip this step dynamically
    return answers.some_flag === 'Yes';
  }
}
```

**Step types:**
- `patient` — Renders the patient details form (name, DOB, sex, address, scheme)
- `single` — Single-choice radio-style question
- `checkbox` — Multi-select checklist question

**Dynamic opts:** When `opts` is a function, it receives the current `answers` object and returns the options array. Used in UTI to conditionally exclude Nitrofurantoin when contraindicated.

---

## getOutcome Function

`getOutcome(answers)` is the clinical decision engine for each condition. It runs on every `nextStep()` call. It must return an outcome object:

```js
{
  type: 'treat',          // 'emergency' | 'urgent' | 'refer' | 'refer_supply' | 'treat' | 'wait_see'
  reason: 'Text shown in the outcome alert box.',
  rx: [],                 // Prescription lines (drug, dose, frequency)
  instructions: [],       // Patient-facing usage directions
  breastRx: [],           // Breastfeeding mother nipple treatment lines (oral thrush)
  extra: [],              // Additional advice lines
  safety: []              // Safety netting lines
}
```

**Outcome type precedence:** The function evaluates answers in order — emergency first, then urgent, then refer, then treat. Once a disqualifying answer is found, it returns immediately without evaluating further.

**Important:** `getOutcome` is called on every step advance to check whether to short-circuit to the result screen early. It must be safe to call with a partial `answers` object at any point during the consultation.

---

## buildRecord Function

`buildRecord(answers, outcome)` in `ccs-render` generates the structured consultation record used by the result screen and prescription block:

```js
{
  meta:       { timestamp, condition, rxDate, version },
  pharmacist: { name, psi, pharmacy, address, phone },
  patient:    { name, dobFmt, ageStr, ageRx, sex, address, scheme, schemeNum },
  outcome:    { type, reason, rx, instructions, breastRx, extra, safety },
  symptoms:   [],       // From answers.symptoms
  answers:    answers   // Full raw answer snapshot for audit trail
}
```

---

## Utility Functions (ccs-conditions / ccs-render)

| Function | Purpose |
|---|---|
| `calcAgeYears(dob)` | Returns age in whole years from ISO date string |
| `calcAgeMonths(dob)` | Returns age in whole months (used for paediatric dosing) |
| `escapeHtml(str)` | Escapes HTML special characters for safe DOM insertion |
| `linkSepsis(text)` | Wraps 'sepsis' mentions in a hyperlink to HSE Sepsis resources |
| `expandClinicalTerms(text)` | Auto-expands clinical terms with lay definitions in parentheses |
| `formatQuestionText(step, text)` | Converts specific long question strings into lead + bullet layout |
| `inferDispenseQuantity(drugLine, directions)` | Parses drug/direction text to calculate dispense quantity |
| `visualAid(src, alt, summary, caption, sourceNote)` | Returns HTML for a collapsible image with caption |

---

## Completed Modules

### Oral Thrush
- Adults, children, and infants
- Age-banded Nystatin / Miconazole dosing
- Warfarin interaction skip (Miconazole → Nystatin)
- Breastfeeding mother and infant contemporaneous treatment
- Denture care advice
- Inhaled steroid rinse advice
- Red flag exclusions: erythroplakia, mucositis, angular cheilitis

### Conjunctivitis
- Bacterial vs viral/allergic routing
- Contact lens wearer pathway
- Discharge type (purulent vs watery/mucoserous) drives treatment
- Chloramphenicol first line for bacterial; lubricant-only for viral/allergic
- Safety netting includes school attendance guidance

### UTI (Uncomplicated)
- Female aged 16–64 only
- Three-tier referral: emergency → urgent → non-urgent GP
- Nitrofurantoin contraindication check (renal impairment, breastfeeding < 1 month)
- Dynamic treatment selection step (pharmacist chooses Nitro IR / MR / Trimethoprim)
- Wait-and-see pathway for 1–2 symptoms
- Treat pathway for all 3 symptoms (dysuria, frequency, urgency)
- Differential diagnosis flags: urethritis, GSM, cauda equina, acute pyelonephritis, STI
- `seedUtiChecklistState` pre-ticks pyelonephritis symptom if already confirmed

---

## Stub Modules (Coming Soon)

These are registered in `CONDITIONS` as stubs and listed in `COMING_SOON_CONDITIONS`:

- `vv_thrush` — Vulvovaginal Thrush
- `impetigo` — Impetigo
- `allergic_rhinitis` — Allergic Rhinitis
- `shingles` — Shingles

To build a new module, copy the stub template at the comment in `ccs-conditions`, implement `overview`, `steps`, and `getOutcome`, then move from `COMING_SOON_CONDITIONS` to `AVAILABLE_CONDITIONS`.

---

## Dev Shortcut

A dev login shortcut is present in `ccs-logic` for testing without filling in the pharmacist form:

```js
var DEV_SHORTCUT = true;
```

**Set `DEV_SHORTCUT = false` before any production deployment.**

The `devShortcut()` function also pre-populates a UTI consultation with test answers. Remove or disable it before publishing.

---

## Feedback Integration

Google Forms feedback is integrated via `FEEDBACK_FORM_ID` in `ccs-render`. The feedback button appears on the result screen and pre-fills condition name and outcome type. The form URL is constructed in `buildFeedbackUrl()`. To update the form, replace `FEEDBACK_FORM_ID` and the `entry.*` field IDs.

---

## Patient Bar

A fixed secondary bar (`ptbar`) appears above the consultation once patient details are entered. It shows patient name, age, DOB, and the active condition pill. `syncBars()` dynamically adjusts `body.padding-top` on resize to accommodate the stacked fixed bars.

---

## Print

The result screen is print-ready. `window.print()` is wired to the Print button. Print CSS hides all navigation, headers, and buttons; renders only the result card with a footer citing the app version.

---

## Deployment

- Hosted on Netlify (drag-and-drop single file deployment)
- No build step required — deploy `index.html` directly
- Future: embed in Bubble.io with bidirectional `postMessage` for auth, storage, and subscription management

---

## Clinical Rules — Do Not Violate

1. All question text, exclusion criteria, referral reasons, treatment options, and dosing instructions must follow current HSE CCS protocols exactly. Do not paraphrase or reword clinical content.
2. Outcome types must follow the correct priority order: `emergency` → `urgent` → `refer` → `treat`/`wait_see`.
3. Age-banded dosing logic must be checked against the protocol before modification.
4. Warfarin/interacting drug skip logic for Miconazole must be preserved in oral thrush.
5. Breastfeeding contemporaneous treatment (mother + infant) must always be triggered correctly.
6. Never remove or soften safety netting content without a protocol basis.