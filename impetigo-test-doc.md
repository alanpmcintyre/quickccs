# Impetigo - Manual Test Scenarios

**Before each test:** sign in (name, PSI no., contract no., pharmacy, address, phone) → click Impetigo card → accept disclaimer → Start → Next on overview.

**Patient details step (all tests):** fill name, DOB, sex, address, phone, tick informed consent → Next.

---

### 1. Treat: adult, no exclusions → Fusidic Acid cream

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (serious condition / moderate-severe immunocompromise / complications) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | None apply - select **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (mildly to moderately immunocompromised?) | None apply - select **No** → Next |
| 8 | Differential diagnosis gate | Click **Proceed to treatment** |
| 9 | Select treatment | Select **Fusidic Acid (Fucidin) 20mg/g cream** → Next |

**Expected:** Treat outcome — "Suitable for treatment under the Common Conditions Service", Fusidic Acid (Fucidin) 20mg/g cream, directions include "every 8 hours"

---

### 2. Treat: adult, no exclusions → Sodium Fusidate ointment

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (serious condition / moderate-severe immunocompromise / complications) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | None apply - select **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (mildly to moderately immunocompromised?) | None apply - select **No** → Next |
| 8 | Differential diagnosis gate | Click **Proceed to treatment** |
| 9 | Select treatment | Select **Sodium Fusidate (Fucidin) 20mg/g ointment** → Next |

**Expected:** Treat outcome — "Suitable for treatment under the Common Conditions Service", Sodium Fusidate (Fucidin) 20mg/g ointment, directions include "every 8 hours"

---

### 3. Treat: child aged exactly 2 months (minimum eligible age)

**Patient:** Male, 2 months old (DOB exactly 2 months ago)

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill with DOB 2 months ago, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | None apply - select **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (mildly to moderately immunocompromised?) | None apply - select **No** → Next |
| 8 | Differential diagnosis gate | Click **Proceed to treatment** |
| 9 | Select treatment | Select **Fusidic Acid (Fucidin) 20mg/g cream** → Next |

**Expected:** Treat outcome — "Suitable for treatment under the Common Conditions Service", Fusidic Acid (Fucidin) 20mg/g cream

---

### 4. Treat: all differentials reviewed and cleared

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | None apply - select **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (mildly to moderately immunocompromised?) | None apply - select **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **No** → Next |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - cold sore (HSV) suspected? | **No** → Next |
| 12 | Differential diagnosis - cutaneous Candida suspected? | **No** → Next |
| 13 | Differential diagnosis - guttate psoriasis suspected? | **No** → Next |
| 14 | Differential diagnosis - dermatophytosis (Tinea) suspected? | **No** → Next |
| 15 | Differential diagnosis - atopic dermatitis (eczema) suspected? | **No** → Next |
| 16 | Differential diagnosis - contact dermatitis suspected? | **No** → Next |
| 17 | Differential diagnosis - scabies suspected? | **No** → Next |
| 18 | Select treatment | Select **Fusidic Acid (Fucidin) 20mg/g cream** → Next |

**Expected:** Treat outcome — "Suitable for treatment under the Common Conditions Service", Fusidic Acid (Fucidin) 20mg/g cream, directions include "every 8 hours"

---

### 5. Emergency: systemically very unwell / severe infection / sepsis

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | Applies - select **Yes** → Next |

**Expected:** Emergency outcome — mentions 999

---

### 6. Urgent: signs of serious condition / moderate-severe immunocompromise / complications

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (serious condition / moderate-severe immunocompromise / complications) | Applies - select **Yes** → Next |

**Expected:** Urgent outcome — "Urgent medical assessment required"

---

### 7. Refer: infant under 2 months

**Patient:** Male, 30 days old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill with DOB 30 days ago, tick consent → Next |

**Expected:** Refer outcome immediately — mentions "under 2 months"

---

### 8. Refer: widespread impetigo / breastfeeding with breast lesion / SPC contraindications (step 4)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | Applies - select **Yes** → Next |

**Expected:** Refer outcome — mentions "non-urgent referral criteria"

---

### 9. Refer: recurrent / active skin condition / open wounds / previous treatment failure (step 5)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | Applies - select **Yes** → Next |

**Expected:** Refer outcome — mentions "non-urgent referral criteria"

---

### 10. Refer: oral antibiotics / fusidic acid history / fire hazard / hypersensitivity (step 6)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | Applies - select **Yes** → Next |

**Expected:** Refer outcome — mentions "non-urgent referral criteria"

---

### 11. Refer: mildly to moderately immunocompromised — refer without supply (step 7)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | None apply - select **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (mildly to moderately immunocompromised?) | Select **Yes - refer without supply** → Next |

**Expected:** Refer outcome — mentions "immunocompromised"

---

### 12. Refer: bullous impetigo suspected (differential diagnosis)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | None apply - select **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (mildly to moderately immunocompromised?) | None apply - select **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **Yes - bullous impetigo is suspected** → Next |

**Expected:** Refer outcome — mentions "Bullous impetigo"

---

### 13. Refer: shingles (Herpes Zoster) suspected

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | None apply - select **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (mildly to moderately immunocompromised?) | None apply - select **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **No** → Next |
| 10 | Differential diagnosis - shingles suspected? | **Yes - Shingles (Herpes Zoster) is suspected** → Next |

**Expected:** Refer outcome — mentions "Shingles"

---

### 14. Refer: cold sore (Herpes Simplex Virus) suspected

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2–7 | Exclusion criteria steps | All **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **No** → Next |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - cold sore (HSV) suspected? | **Yes - Cold sore (HSV) is suspected** → Next |

**Expected:** Refer outcome — mentions "Cold sores"

---

### 15. Refer: cutaneous Candida infection suspected

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2–7 | Exclusion criteria steps | All **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **No** → Next |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - cold sore (HSV) suspected? | **No** → Next |
| 12 | Differential diagnosis - cutaneous Candida suspected? | **Yes - Cutaneous Candida is suspected** → Next |

**Expected:** Refer outcome — mentions "candidiasis"

---

### 16. Refer: guttate psoriasis suspected

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2–7 | Exclusion criteria steps | All **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **No** → Next |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - cold sore (HSV) suspected? | **No** → Next |
| 12 | Differential diagnosis - cutaneous Candida suspected? | **No** → Next |
| 13 | Differential diagnosis - guttate psoriasis suspected? | **Yes - Guttate Psoriasis is suspected** → Next |

**Expected:** Refer outcome — mentions "psoriasis"

---

### 17. Refer: dermatophytosis (Tinea / ringworm) suspected

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2–7 | Exclusion criteria steps | All **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **No** → Next |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - cold sore (HSV) suspected? | **No** → Next |
| 12 | Differential diagnosis - cutaneous Candida suspected? | **No** → Next |
| 13 | Differential diagnosis - guttate psoriasis suspected? | **No** → Next |
| 14 | Differential diagnosis - dermatophytosis (Tinea) suspected? | **Yes - Dermatophytosis (Tinea) is suspected** → Next |

**Expected:** Refer outcome — mentions "Dermatophytosis"

---

### 18. Refer: atopic dermatitis (eczema) suspected

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2–7 | Exclusion criteria steps | All **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **No** → Next |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - cold sore (HSV) suspected? | **No** → Next |
| 12 | Differential diagnosis - cutaneous Candida suspected? | **No** → Next |
| 13 | Differential diagnosis - guttate psoriasis suspected? | **No** → Next |
| 14 | Differential diagnosis - dermatophytosis (Tinea) suspected? | **No** → Next |
| 15 | Differential diagnosis - atopic dermatitis (eczema) suspected? | **Yes - atopic dermatitis (eczema) is suspected** → Next |

**Expected:** Refer outcome — mentions "Atopic dermatitis"

---

### 19. Refer: contact dermatitis suspected

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2–7 | Exclusion criteria steps | All **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **No** → Next |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - cold sore (HSV) suspected? | **No** → Next |
| 12 | Differential diagnosis - cutaneous Candida suspected? | **No** → Next |
| 13 | Differential diagnosis - guttate psoriasis suspected? | **No** → Next |
| 14 | Differential diagnosis - dermatophytosis (Tinea) suspected? | **No** → Next |
| 15 | Differential diagnosis - atopic dermatitis (eczema) suspected? | **No** → Next |
| 16 | Differential diagnosis - contact dermatitis suspected? | **Yes - contact dermatitis is suspected** → Next |

**Expected:** Refer outcome — mentions "Contact dermatitis"

---

### 20. Refer: scabies suspected

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2–7 | Exclusion criteria steps | All **No** → Next |
| 8 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 9 | Differential diagnosis - bullous impetigo suspected? | **No** → Next |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - cold sore (HSV) suspected? | **No** → Next |
| 12 | Differential diagnosis - cutaneous Candida suspected? | **No** → Next |
| 13 | Differential diagnosis - guttate psoriasis suspected? | **No** → Next |
| 14 | Differential diagnosis - dermatophytosis (Tinea) suspected? | **No** → Next |
| 15 | Differential diagnosis - atopic dermatitis (eczema) suspected? | **No** → Next |
| 16 | Differential diagnosis - contact dermatitis suspected? | **No** → Next |
| 17 | Differential diagnosis - scabies suspected? | **Yes - scabies is suspected** → Next |

**Expected:** Refer outcome — mentions "Scabies"

---

### 21. Refer with supply: mild immunocompromise → initial limited supply, Fusidic Acid cream

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | None apply - select **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (mildly to moderately immunocompromised?) | Select **Yes - provide initial limited supply and refer** → Next |
| 8 | Differential diagnosis gate | Click **Proceed to treatment** |
| 9 | Select treatment | Select **Fusidic Acid (Fucidin) 20mg/g cream** → Next |

**Expected:** Refer with supply outcome — "initial limited supply may be considered", Fusidic Acid (Fucidin) 20mg/g cream

---

### 22. Refer with supply: mild immunocompromise → initial limited supply, Sodium Fusidate ointment

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (SPC contraindications / breastfeeding with breast lesion / 4+ lesions) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (recurrent / active skin condition / open wounds / previous treatment failure) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (oral antibiotics / fusidic acid history / fire hazard / hypersensitivity) | None apply - select **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (mildly to moderately immunocompromised?) | Select **Yes - provide initial limited supply and refer** → Next |
| 8 | Differential diagnosis gate | Click **Proceed to treatment** |
| 9 | Select treatment | Select **Sodium Fusidate (Fucidin) 20mg/g ointment** → Next |

**Expected:** Refer with supply outcome — "initial limited supply may be considered", Sodium Fusidate (Fucidin) 20mg/g ointment
