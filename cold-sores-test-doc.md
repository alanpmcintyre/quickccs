# Cold Sores - Manual Test Scenarios

**Before each test:** sign in (name, PSI no., contract no., pharmacy, address, phone) → click Cold Sores card → accept disclaimer → Start → Next on overview.

**Patient details step (all tests):** fill name, DOB, sex, address, phone, tick informed consent → Next.

---

### 1. Treat: standard adult, no exclusions

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (erythema multiforme suspected?) | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required (mildly immunocompromised or recurrent cold sores?) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | Select **Aciclovir** → Next |

**Expected:** Treat outcome — "Suitable for treatment under the Common Conditions Service", Aciclovir 5% w/w cream, directions include "five times daily"

---

### 2. Emergency: systemically unwell

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | Systemically very unwell applies - select **Yes** → Next |

**Expected:** Emergency outcome — "Emergency referral required — call 999 or refer to Emergency Department via ambulance", mentions 999

---

### 3. Urgent: infant under 1 month

**Patient:** Male, 15 days old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill with DOB 15 days ago, tick consent → Next |

**Expected:** Urgent outcome immediately — "Urgent medical assessment required — refer to GP, GP out-of-hours, or Emergency Department", mentions "under 1 month"

---

### 4. Urgent: eye lesions or moderate to severe immunocompromise

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | Applies - select **Yes** → Next |

**Expected:** Urgent outcome — "Urgent medical assessment required — refer to GP, GP out-of-hours, or Emergency Department", mentions "urgent referral criteria identified"

---

### 5. Refer: pregnancy / spreading / contraindications / not improving within 14 days

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | Applies - select **Yes** → Next |

**Expected:** Refer outcome — "Referral to GP or other relevant medical practitioner required — pharmacist prescribing not permitted", mentions "non-urgent referral criteria"

---

### 6. Refer: secondary infection / hypersensitivity to Aciclovir

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | Applies - select **Yes** → Next |

**Expected:** Refer outcome — "Referral to GP or other relevant medical practitioner required — pharmacist prescribing not permitted", mentions "non-urgent referral criteria"

---

### 7. Refer: suspected gingivostomatitis

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **Yes** → Next |

**Expected:** Refer outcome — mentions "gingivostomatitis"

---

### 8. Refer: suspected erythema multiforme

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (erythema multiforme suspected?) | **Yes** → Next |

**Expected:** Refer outcome — mentions "erythema multiforme"

---

### 9. Refer: mild immunocompromise (refer without supply)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (erythema multiforme suspected?) | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required (mildly immunocompromised or recurrent cold sores?) | Select **Yes - refer without supply** → Next |

**Expected:** Refer outcome — mentions "immunocompromised"

---

### 10. Refer: shingles suspected (via differential review)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (erythema multiforme suspected?) | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required (mildly immunocompromised or recurrent cold sores?) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Differential diagnosis - shingles suspected? | **Yes - Shingles (Herpes Zoster) is suspected** → Next |

**Expected:** Refer outcome — mentions "Shingles"

---

### 11. Refer: impetigo suspected (via differential review)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (erythema multiforme suspected?) | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required (mildly immunocompromised or recurrent cold sores?) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - impetigo suspected? | **Yes - Impetigo is suspected** → Next |

**Expected:** Refer outcome — mentions "Impetigo"

---

### 12. Urgent: squamous cell carcinoma suspected (via differential review)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (erythema multiforme suspected?) | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required (mildly immunocompromised or recurrent cold sores?) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - impetigo suspected? | **No** → Next |
| 12 | Differential diagnosis - squamous cell carcinoma of the lip suspected? | **Yes - Squamous cell carcinoma of the lip is suspected** → Next |

**Expected:** Urgent outcome — mentions "Squamous cell carcinoma"

---

### 13. Refer with supply: mild immunocompromise or recurrent cold sores (initial limited supply)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (erythema multiforme suspected?) | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required (mildly immunocompromised or recurrent cold sores?) | Select **Yes - provide initial limited supply and refer** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | Select **Aciclovir** → Next |

**Expected:** Refer with supply outcome — "Referral to GP required — initial limited supply may be considered", Aciclovir 5% w/w cream

---

### 14. Treat: all differentials reviewed and cleared

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required (erythema multiforme suspected?) | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required (mildly immunocompromised or recurrent cold sores?) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - impetigo suspected? | **No** → Next |
| 12 | Differential diagnosis - squamous cell carcinoma of the lip suspected? | **No** → Next |
| 13 | Select treatment | Select **Aciclovir** → Next |

**Expected:** Treat outcome — "Suitable for treatment under the Common Conditions Service", Aciclovir 5% w/w cream, directions include "five times daily"
