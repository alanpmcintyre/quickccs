# Conjunctivitis Module — Protocol Compliance Audit

**Protocol:** HSE CCS — Acute Infective Conjunctivitis v1.2  
**File audited:** `index.html` (conjunctivitis condition object + getOutcome)  
**Date:** 2026-05-10

---

## Summary

| Area | Status |
|------|--------|
| Emergency criteria (2.4.1) — all 13 items present | ✅ |
| Emergency criteria — protocol order | ✅ |
| Urgent criteria (2.4.2) — all items present | ✅ |
| Treatment selection logic | ✅ |
| Dosing — chloramphenicol drops, fusidic acid | ✅ |
| Safety netting | ✅ mostly |
| Chloramphenicol ointment as prescribable option | ❌ |
| Glaucoma drops exception documented | ❌ |
| Photophobia severity qualifier | ⚠️ |
| Ciliary flush laterality qualifier | ⚠️ |
| Chloramphenicol ointment dosing in notes | ⚠️ |
| Safety netting wording for non-antibiotic path | ⚠️ |

---

## Definite Divergences

### 1. Glaucoma drops exception not documented ❌

**Protocol s.2.4.2 item 3:**
> "History of ocular disease e.g. keratitis, scleritis, iritis **(individual using topical eye drops for glaucoma is not a reason for referral unless no improvement after 2 days of treatment initiation)**."

**Module (cj_urgent_a, bullet 1):**
> "History of ocular disease such as keratitis, scleritis, or iritis"

The exception is entirely absent. A pharmacist who interprets "ocular disease" to include glaucoma would incorrectly refer that patient. Needs to be visible in the step sub-text.

**Suggested fix:**
> "History of ocular disease such as keratitis, scleritis, or iritis. Note: use of topical eye drops for glaucoma alone is not a reason for referral unless there is no improvement after 2 days of treatment."

---

### 2. Chloramphenicol 1% ointment not offered as a prescribable option ❌

**Protocol s.3.1:**
The ointment is listed as a co-equal OR first-choice option with its own dose:
> "Apply to the infected eye(s) three to four times daily. Doses should be spaced evenly during waking hours."

**Module:**
The ointment appears only as an extra advice line — there is no mechanism to select it as the actual prescription. The module always prescribes drops when chloramphenicol is chosen.

**Options:**
- **Option A** — Add a treatment selection step after bacterial diagnosis: "Which formulation?" (Drops / Ointment), with separate rx lines and ointment dose of 3–4× daily.
- **Option B** — Keep drops as the default prescription but expand the existing extra note to include the full ointment dose, so the pharmacist can substitute if clinically appropriate.

Option B is simpler and consistent with how other modules handle alternatives.

---

## Minor / Wording Gaps

### 3. Photophobia qualifier missing ⚠️

**Protocol:** "Severe photophobia and/or severe foreign body sensation **(cannot hold eye open)**"  
**Module (cj_emergency_b, bullet 3):** "Severe photophobia or severe foreign body sensation"

The qualifier helps calibrate severity. Should be added.

---

### 4. Ciliary flush laterality qualifier missing ⚠️

**Protocol:** "Ciliary flush, **especially if unilateral** (see Appendix B)"  
**Module (cj_emergency_c, bullet 3):** "Ciliary flush — circular redness at the junction of the cornea and sclera"

"Especially if unilateral" is a useful clinical cue and should be present.

---

### 5. Chloramphenicol ointment dose absent from advisory note ⚠️

The extra note says the ointment "may be preferred" but gives no dosing. Protocol specifies 3–4× daily. A pharmacist acting on this note has no dose to give.

**Fix:** Add "(3 to 4 times daily, spaced evenly during waking hours)" to the existing note.

---

### 6. Safety netting "48 hours" note applies to non-antibiotic outcomes ⚠️

The module pushes "Seek medical advice if there is no improvement after 48 hours of treatment" for all outcomes, including viral/no-antibiotic cases where no antibiotic treatment is started. The phrase "of treatment" is misleading in that context.

**Fix:** Either restrict to the bacterial candidate path, or soften to: "Seek medical advice if symptoms worsen or do not improve within 48 hours."

---

## Low-priority / Informational Gaps

### 7. Pre-auricular lymphadenopathy not mentioned in chlamydia step

Protocol describes pre-auricular lymphadenopathy as a supporting feature of chlamydia in older patients. The chlamydia_suspected step sub-text does not mention it. Low impact — it is a supporting clinical sign, not a decision point.

### 8. Minims brand restriction (>2 years) not documented

Protocol notes that "Minims Chloramphenicol 0.5% Eye Drops, Solution is indicated in adults and children (above 2 years old)." The general <2 years caution is present in the module but the brand-specific note is absent.

### 9. Informed consent not explicitly checked

Protocol inclusion criteria require informed consent (or parental/guardian consent for patients under 16). No step in the module asks for or records consent. Consistent with how other modules handle this — likely managed by workflow convention, not the app.

---

## What is Correct and Complete

- All 13 emergency criteria (s.2.4.1) present in protocol order ✅
- Chlamydia age-routing: emergency if <1 month, urgent if ≥1 month ✅
- All 9 bundleable urgent criteria (s.2.4.2) covered ✅
- Bacterial candidate definition: hyperaemia + purulent/mucopurulent discharge ✅
- Treatment priority: pregnant/BF → fusidic; chloramphenicol CI → fusidic; default → chloramphenicol ✅
- Chloramphenicol drops dose (1–2 drops, 4× daily) and duration (48hrs after resolution, max 1 week) ✅
- Fusidic acid dose (1 drop every 12hrs), duration, pregnancy safety ✅
- Chloramphenicol caution in children <2 years ✅
- Both-drugs-unsuitable → urgent referral ✅
- Lubricant advice for non-bacterial ✅
- OTC analgesia advice ✅
- All safety netting items from s.4.1 ✅
- Contact lens restriction (do not wear until antibiotic course complete) — bacterial path only ✅
- School/childcare attendance guidance ✅

---

## Recommended Fixes (Priority Order)

| # | Fix | Severity |
|---|-----|----------|
| 1 | Add glaucoma exception to cj_urgent_a bullet 1 | Clinical safety |
| 2 | Add ointment dose to extra note (3–4× daily) | Clinical accuracy |
| 3 | Add "cannot hold eye open" to photophobia bullet (cj_emergency_b) | Wording |
| 4 | Add "especially if unilateral" to ciliary flush bullet (cj_emergency_c) | Wording |
| 5 | Decide on ointment as selectable prescription option | Design decision |
| 6 | Refine 48-hour safety netting note for non-antibiotic path | Wording |
