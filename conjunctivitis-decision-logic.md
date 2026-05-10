# Conjunctivitis — Decision Logic

Source of truth: HSE CCS Protocol — Acute Infective Conjunctivitis v1.2

---

## Consultation Flow

Steps run in order. A disqualifying answer short-circuits to the result screen immediately.

| Step | Section | Content |
|------|---------|---------|
| 1 | Patient details | Name, DOB, sex, address, scheme |
| 2 | Emergency | Scleritis / herpes zoster / herpes simplex |
| 3 | Emergency | Chlamydia trachomatis suspected? *(age-routed — see below)* |
| 4 | Emergency | Adenoviral / vision changes / photophobia |
| 5 | Emergency | Contact lenses / irregular pupil / ciliary flush |
| 6 | Emergency | Eye pain / corneal opacity / ocular trauma |
| 7 | Urgent | Ocular disease history / hyper-purulent discharge / preseptal cellulitis |
| 8 | Urgent | Meibomian cyst cellulitis / minor trauma / severe headache |
| 9 | Urgent | Focal redness / recent reinfection / not improving after 2 days |
| 10 | Symptom assessment | Diffuse conjunctival hyperaemia? |
| 11 | Symptom assessment | Discharge type? |
| 12 | Treatment screening | Pregnant or breastfeeding? *(female patients only)* |
| 13 | Treatment screening | Chloramphenicol contraindicated? |
| 14 | Treatment screening | Fusidic acid contraindicated? |

Steps 12–14 are skipped unless the patient is a bacterial candidate (see below).

---

## Outcome Priority

`getOutcome()` evaluates in strict order — earliest match wins:

1. **Age < 6 months** → urgent (inclusion criteria: ≥6 months)
2. **Emergency step Yes** (steps 2, 4, 5, 6) → emergency
3. **Chlamydia suspected + age < 1 month** → emergency
4. **Chlamydia suspected + age ≥ 1 month** → urgent
5. **Urgent step Yes** (steps 7, 8, 9) → urgent
6. **Bacterial candidate logic** → treat or urgent (see below)

---

## Bacterial vs Viral/Allergic

Both criteria must be true for bacterial treatment to apply:

| Criterion | Value |
|-----------|-------|
| Diffuse conjunctival hyperaemia | Yes |
| Discharge type | Purulent or mucopurulent |

### If bacterial candidate:

Treatment is selected in this order of preference:

1. **Pregnant or breastfeeding** → Fusidic acid (chloramphenicol not recommended)
   - If fusidic acid also contraindicated → urgent referral
2. **Chloramphenicol contraindicated** → Fusidic acid
   - If fusidic acid also contraindicated → urgent referral
3. **Default** → Chloramphenicol 0.5% eye drops
   - Note: ointment alternative if compliance with drops is difficult
   - Caution in children under 2 years

### If not bacterial candidate:

| Scenario | Message |
|---------|---------|
| Discharge watery or mucoserous | Viral conjunctivitis is often self-limiting |
| Discharge purulent but no hyperaemia | Purulent discharge present but diffuse conjunctival hyperaemia absent — both features required for antibiotic treatment; reassess for alternative diagnosis |
| No discharge / no hyperaemia | Clinical features do not meet the criteria for antibiotic treatment under the protocol |

All non-bacterial outcomes: no antibiotic, lubricant eye drops advised, OTC analgesia if needed.

---

## Chlamydia Routing

Chlamydia trachomatis is a separate step (not bundled) because the outcome depends on age:

- **Age < 1 month** → emergency referral
- **Age ≥ 1 month** → urgent GP referral

It cannot be folded into a bundled "do any apply" step without losing this distinction.

---

## Exclusion Criteria Handled Outside the Steps

| Criterion | Where handled |
|-----------|--------------|
| Age < 6 months | `getOutcome()` age check before any step evaluation |
| Contraindications per SPC | chloramphenicol_ci and fusidic_ci steps (treatment screening, end of flow) |
| Known hypersensitivity to treatment options | chloramphenicol_ci / fusidic_ci steps |

These correspond to items 1, 2, and 13 in protocol section 2.4.2. Items 3–12 are covered by the bundled urgent steps.
