# Cold Sores - Manual Test Scenarios

**Before each test:** sign in (name, PSI no., contract no., pharmacy, address, phone) → click Cold Sores card → accept disclaimer → Start → Next on overview.

**Patient details step (all tests):** fill name, DOB, sex, address, phone, tick informed consent → Next.

---

### 1. Treat: standard adult, no exclusions

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required: gingivostomatitis | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required: erythema multiforme | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required: mild immunocompromise / recurrent | **No** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | **Aciclovir** → Next |

**Expected:** Treat outcome - "Suitable for treatment under the Common Conditions Service", Aciclovir 5% w/w cream, directions include "five times daily"

---

### 2. Emergency: systemically unwell

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **Yes** → Next |

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
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **Yes** → Next |

**Expected:** Urgent outcome - "Urgent medical assessment required", mentions "urgent referral criteria"

---

### 5. Urgent: moderate to severe immunocompromise

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **Yes** → Next |

**Expected:** Urgent outcome - "Urgent medical assessment required"

---

### 6. Refer: pregnancy

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 7. Refer: signs of infection spreading

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope"

---

### 8. Refer: contraindications as per SPC

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 9. Refer: symptoms not improving within 14 days

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 10. Refer: signs of secondary infection

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 11. Refer: known hypersensitivity to Aciclovir

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **Yes** → Next |

**Expected:** Refer outcome - "Refer: outside service scope", mentions "non-urgent referral criteria"

---

### 12. Refer: suspected gingivostomatitis

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required: gingivostomatitis | **Yes** → Next |

**Expected:** Refer outcome - mentions "gingivostomatitis"

---

### 13. Refer: suspected erythema multiforme

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required: gingivostomatitis | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required: erythema multiforme | **Yes** → Next |

**Expected:** Refer outcome - mentions "erythema multiforme"

---

### 14. Refer: shingles suspected (via differential review)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required: gingivostomatitis | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required: erythema multiforme | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required: mild immunocompromise / recurrent | **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Shingles question | **Yes - Shingles (Herpes Zoster) is suspected** → Next |

**Expected:** Refer outcome - mentions "Shingles"

---

### 15. Refer: impetigo suspected (via differential review)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required: gingivostomatitis | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required: erythema multiforme | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required: mild immunocompromise / recurrent | **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Shingles question | **No** → Next |
| 11 | Impetigo question | **Yes - Impetigo is suspected** → Next |

**Expected:** Refer outcome - mentions "Impetigo"

---

### 16. Refer: squamous cell carcinoma suspected (via differential review)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required: gingivostomatitis | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required: erythema multiforme | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required: mild immunocompromise / recurrent | **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Shingles question | **No** → Next |
| 11 | Impetigo question | **No** → Next |
| 12 | SCC question | **Yes - Squamous cell carcinoma of the lip is suspected** → Next |

**Expected:** Refer outcome - mentions "Squamous cell carcinoma"

---

### 17. Refer with supply: mild immunocompromise

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required: gingivostomatitis | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required: erythema multiforme | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required: mild immunocompromise / recurrent | **Yes** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | **Aciclovir** → Next |

**Expected:** Refer with supply outcome - "Refer: initial limited supply may be considered", Aciclovir 5% w/w cream

---

### 18. Refer with supply: recurrent problematic cold sores

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required: gingivostomatitis | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required: erythema multiforme | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required: mild immunocompromise / recurrent | **Yes** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | **Aciclovir** → Next |

**Expected:** Refer with supply outcome - "Refer: initial limited supply may be considered", Aciclovir 5% w/w cream

---

### 19. Treat: all differentials reviewed and cleared

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Exclusion criteria - emergency referral required | **No** → Next |
| 3 | Exclusion criteria - urgent referral required | **No** → Next |
| 4 | Exclusion criteria - non-urgent referral required (A) | **No** → Next |
| 5 | Exclusion criteria - non-urgent referral required (B) | **No** → Next |
| 6 | Exclusion criteria - non-urgent referral required: gingivostomatitis | **No** → Next |
| 7 | Exclusion criteria - non-urgent referral required: erythema multiforme | **No** → Next |
| 8 | Exclusion criteria - non-urgent referral required: mild immunocompromise / recurrent | **No** → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Shingles question | **No** → Next |
| 11 | Impetigo question | **No** → Next |
| 12 | SCC question | **No** → Next |
| 13 | Select treatment | **Aciclovir** → Next |

**Expected:** Treat outcome - "Suitable for treatment under the Common Conditions Service", Aciclovir 5% w/w cream, directions include "five times daily"
