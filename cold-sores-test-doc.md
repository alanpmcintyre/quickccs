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
| 8 | Exclusion criteria - non-urgent referral required (mild immunocompromise / recurrent cold sores) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | Select **Aciclovir** → Next |

**Expected:** Treat outcome - "Suitable for treatment under the Common Conditions Service", Aciclovir 5% w/w cream, directions include "five times daily"

---

### 2. Emergency: systemically unwell

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | Systemically very unwell applies - select **Yes** → Next |

**Expected:** Emergency outcome - "Emergency referral required", mentions 999

---

### 3. Urgent: infant under 1 month

**Patient:** Male, 15 days old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill with DOB 15 days ago, tick consent → Next |

**Expected:** Urgent outcome immediately - "Urgent medical assessment required", mentions "under 1 month"

---

### 4. Urgent: lesions on or involving the eye

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | Lesions on or involving the eye apply - select **Yes** → Next |

**Expected:** Urgent outcome - "Urgent medical assessment required", mentions "urgent referral criteria"

---

### 5. Urgent: moderate to severe immunocompromise

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | Moderate to severe immunocompromise applies - select **Yes** → Next |

**Expected:** Urgent outcome - "Urgent medical assessment required"

---

### 6. Refer: pregnancy

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | Pregnancy applies - select **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 7. Refer: signs of infection spreading

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | Signs of infection spreading apply - select **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope"

---

### 8. Refer: contraindications as per SPC

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | Contraindications per SPC apply - select **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 9. Refer: symptoms not improving within 14 days

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | Symptoms not improving within 14 days applies - select **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 10. Refer: signs of secondary infection

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | Signs of secondary infection apply - select **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 11. Refer: known hypersensitivity to Aciclovir

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | Known hypersensitivity to Aciclovir applies - select **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 12. Refer: suspected gingivostomatitis

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required (systemically very unwell / severe infection / sepsis) | None apply - select **No** → Next |
| 3 | Exclusion criteria - urgent referral required (eye lesions / moderate-to-severe immunocompromise) | None apply - select **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (contraindications / pregnancy / spreading / not improving within 14 days) | None apply - select **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (secondary infection / hypersensitivity to Aciclovir) | None apply - select **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required (gingivostomatitis suspected?) | **Yes** → Next |

**Expected:** Refer outcome - mentions "gingivostomatitis"

---

### 13. Refer: suspected erythema multiforme

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

**Expected:** Refer outcome - mentions "erythema multiforme"

---

### 14. Refer: shingles suspected (via differential review)

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
| 8 | Exclusion criteria - non-urgent referral required (mild immunocompromise / recurrent cold sores) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Differential diagnosis - shingles suspected? | **Yes - Shingles (Herpes Zoster) is suspected** → Next |

**Expected:** Refer outcome - mentions "Shingles"

---

### 15. Refer: impetigo suspected (via differential review)

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
| 8 | Exclusion criteria - non-urgent referral required (mild immunocompromise / recurrent cold sores) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - impetigo suspected? | **Yes - Impetigo is suspected** → Next |

**Expected:** Refer outcome - mentions "Impetigo"

---

### 16. Refer: squamous cell carcinoma suspected (via differential review)

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
| 8 | Exclusion criteria - non-urgent referral required (mild immunocompromise / recurrent cold sores) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - impetigo suspected? | **No** → Next |
| 12 | Differential diagnosis - squamous cell carcinoma of the lip suspected? | **Yes - Squamous cell carcinoma of the lip is suspected** → Next |

**Expected:** Refer outcome - mentions "Squamous cell carcinoma"

---

### 17. Refer with supply: mild immunocompromise

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
| 8 | Exclusion criteria - non-urgent referral required (mild immunocompromise / recurrent cold sores) | Mild immunocompromise applies - select **Yes** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | Select **Aciclovir** → Next |

**Expected:** Refer with supply outcome - "Refer: initial limited supply may be considered", Aciclovir 5% w/w cream

---

### 18. Refer with supply: recurrent problematic cold sores

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
| 8 | Exclusion criteria - non-urgent referral required (mild immunocompromise / recurrent cold sores) | Recurrent problematic cold sores applies - select **Yes** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | Select **Aciclovir** → Next |

**Expected:** Refer with supply outcome - "Refer: initial limited supply may be considered", Aciclovir 5% w/w cream

---

### 19. Treat: all differentials reviewed and cleared

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
| 8 | Exclusion criteria - non-urgent referral required (mild immunocompromise / recurrent cold sores) | None apply - select **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Differential diagnosis - shingles suspected? | **No** → Next |
| 11 | Differential diagnosis - impetigo suspected? | **No** → Next |
| 12 | Differential diagnosis - squamous cell carcinoma of the lip suspected? | **No** → Next |
| 13 | Select treatment | Select **Aciclovir** → Next |

**Expected:** Treat outcome - "Suitable for treatment under the Common Conditions Service", Aciclovir 5% w/w cream, directions include "five times daily"
