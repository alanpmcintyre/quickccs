# Condition Complexity Ranking

Ordered from simplest to most complex.

1. **Conjunctivitis** — Simple binary route (bacterial vs viral/allergic), one branch point, two treatment outcomes.

2. **Cold Sores** — 15 steps, 3 differentials, mostly binary exclusion checks, single treatment (Aciclovir cream). Slight added nuance: visual aids for erythema multiforme, immunocompromise branch.

3. **Oral Thrush** — Age-banded dosing across three bands, Warfarin interaction skip, dual-patient breastfeeding treatment, denture/inhaled steroid advice branches.

4. **VV Thrush** — 19 steps, 6 differentials, recurrent/discretion three-way branch, dual-product treatment (pessary + cream, severity-dependent), femaleOnly + age gate.

5. **Impetigo** — 21 steps, 9 differentials (most of any module), 4-part non-urgent exclusion block, fire hazard/paraffin check, 12-month fusidic acid history lookback, pre-term age correction, immunocompromise tiering.

6. **UTI** — Three-tier referral hierarchy, dynamic drug selection step, Nitrofurantoin contraindication logic, 5 differential diagnoses, `seedUtiChecklistState` pre-tick, tightest eligibility gate (female 16–64 only).

> Impetigo and UTI are close — UTI edges ahead on dynamic logic; Impetigo has the broadest differential set.

---

*Coming soon: Allergic Rhinitis, Shingles*
