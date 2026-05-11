# Conjunctivitis Module — Protocol Compliance Audit

**Protocol:** HSE CCS — Acute Infective Conjunctivitis v1.2  
**File audited:** `index.html` (conjunctivitis condition object + getOutcome)  
**Date:** 2026-05-11

---

## Summary


| Area                                                | Status |
| --------------------------------------------------- | ------ |
| Emergency criteria (2.4.1) — all 13 items present   | ✅      |
| Emergency criteria — protocol order                 | ✅      |
| Urgent criteria (2.4.2) — all items present         | ✅      |
| Treatment selection logic                           | ✅      |
| Dosing — chloramphenicol drops, fusidic acid        | ✅      |
| Chloramphenicol ointment as prescribable option     | ✅      |
| Glaucoma drops exception documented                 | ✅      |
| Photophobia severity qualifier                      | ✅      |
| Ciliary flush laterality qualifier                  | ✅      |
| Chloramphenicol ointment dosing in formulation step | ✅      |
| Safety netting wording for non-antibiotic path      | ✅      |
| Safety netting — bacterial path                     | ✅      |
| Pre-auricular lymphadenopathy (chlamydia step)      | ✅      |
| Minims brand restriction (>2 years) documented      | ✅      |
| Informed consent step                               | N/A    |


---

## Changes Applied Since Previous Audit (2026-05-10)

### 1. Chloramphenicol 1% ointment added as prescribable option ✅

A `chloramphenicol_formulation` step now appears after `fusidic_ci` when chloramphenicol is the treatment path. The pharmacist selects between:

- **Chloramphenicol 0.5% eye drops** — 1 or 2 drops, 4 times daily
- **Chloramphenicol 1% ointment (unlicensed)** — apply 3 to 4 times daily

The step sub-text includes dosing for both options, the compliance preference rationale, and the blurred-vision note. `getOutcome` generates the correct `rx` lines for each formulation. The ointment path adds "This is an unlicensed medication" and "Ointment may blur vision when used during the day" to `extra`.

---

### 2. Glaucoma drops exception documented ✅

`cj_urgent_a` bullet 1 now reads:

> "History of ocular disease such as keratitis, scleritis, or iritis — *note: use of topical glaucoma eye drops alone is not a reason for referral under this criterion unless there is no improvement after 2 days of treatment*"

---

### 3. Photophobia severity qualifier added ✅

`cj_emergency_b` bullet 3 now reads:

> "Severe photophobia and/or severe foreign body sensation (cannot hold eye open)"

Wording updated from "or" to "and/or" to match protocol exactly.

---

### 4. Ciliary flush laterality qualifier added ✅

`cj_emergency_c` bullet 3 now reads:

> "Ciliary flush, especially if unilateral — circular redness at the junction of the cornea and sclera"

---

### 5. Safety netting split by path ✅

- **Bacterial path:** retains "48 hours of treatment" and "1 week of treatment" lines.
- **Non-antibiotic path:** now reads "Seek medical advice if symptoms worsen or have not resolved within 7–10 days."

---

## Remaining Low-priority / Informational Gaps

### 6. Pre-auricular lymphadenopathy added to chlamydia step ✅

`chlamydia_suspected` sub-text now includes: "Pre-auricular lymphadenopathy (swelling of the lymph nodes in front of the ears) may be present." Also added "in a sexually active person" qualifier to the chronic low-grade irritation description, matching the protocol wording.

---

### 7. Minims brand restriction (>2 years) documented ✅

The drops bullet in the `chloramphenicol_formulation` step now includes: "Note: Minims Chloramphenicol 0.5% Eye Drops are indicated in adults and children above 2 years only." Placed at decision time so the prescriber sees it before selecting the formulation.

---

### 8. Informed consent — handled by wrapper app ✅

Informed consent (including parental/guardian consent for under-16s) is captured by the Bubble.io wrapper application, not within the QuickCCS consultation flow. Not a gap.

---

## What is Correct and Complete

- All 13 emergency criteria (s.2.4.1) present in protocol order ✅
- Chlamydia age-routing: emergency if <1 month, urgent if ≥1 month ✅
- All 9 bundleable urgent criteria (s.2.4.2) covered ✅
- Glaucoma drops carve-out from ocular disease criterion ✅
- Photophobia qualifier: "cannot hold eye open" ✅
- Ciliary flush qualifier: "especially if unilateral" ✅
- Bacterial candidate definition: hyperaemia + purulent/mucopurulent discharge ✅
- Treatment priority: pregnant/BF → fusidic; chloramphenicol CI → fusidic; default → chloramphenicol (drops or ointment) ✅
- Chloramphenicol drops dose (1–2 drops, 4× daily) and duration (48hrs after resolution, max 1 week) ✅
- Chloramphenicol ointment (unlicensed) dose (3–4× daily) and duration ✅
- Ointment: unlicensed flag and blurred-vision warning in `extra` ✅
- Formulation step: dosing context for both options before selection ✅
- Fusidic acid dose (1 drop every 12hrs), duration, pregnancy safety ✅
- Chloramphenicol caution in children <2 years (drops path) ✅
- Both-drugs-unsuitable → urgent referral ✅
- Lubricant advice for non-bacterial ✅
- OTC analgesia advice ✅
- Safety netting — bacterial path: 48hrs and 1-week lines ✅
- Safety netting — non-antibiotic path: 7–10 day self-limiting framing ✅
- Contact lens restriction (bacterial path only) ✅
- School/childcare attendance guidance ✅

