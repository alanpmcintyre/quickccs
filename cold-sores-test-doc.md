# Cold Sores - Manual Test Scenarios

**Before each test:** sign in (name, PSI no., contract no., pharmacy, address, phone) → click Cold Sores card → accept disclaimer → Start → Next on overview.

**Patient details step (all tests):** fill name, DOB, sex, address, phone, tick informed consent → Next.

---

### 1. Treat: standard adult, no exclusions

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick nothing → Next |
| 6 | Gingivostomatitis suspected? | **No** → Next |
| 7 | Erythema multiforme suspected? | **No** → Next |
| 8 | Mild immunocompromise / recurrent (checkboxes) | Tick nothing → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | **Aciclovir** → Next |

**Expected:** Treat outcome - "Suitable for treatment under the Common Conditions Service", Aciclovir 5% w/w cream, directions include "five times daily"

---

### 2. Emergency: systemically unwell

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **Yes** → Next |

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
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick **"Lesions are present on or involving the eye"** → Next |

**Expected:** Urgent outcome - mentions "eye"

---

### 5. Urgent: moderate to severe immunocompromise

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick **"Moderate to severe immunocompromise"** → Next |

**Expected:** Urgent outcome - "Urgent medical assessment required"

---

### 6. Refer: pregnancy

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick **"Pregnancy or suspected pregnancy"** → Next |

**Expected:** Refer outcome - mentions "Pregnancy"

---

### 7. Refer: signs of infection spreading

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick **"Signs of infection spreading"** → Next |

**Expected:** Refer outcome - "Refer: outside service scope"

---

### 8. Refer: contraindications as per SPC

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick **"Contraindications as specified in the medication Summary of Product Characteristics"** → Next |

**Expected:** Refer outcome - mentions "Contraindications"

---

### 9. Refer: symptoms not improving within 14 days

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick **"Symptoms not improving within 14 days, with or without treatment"** → Next |

**Expected:** Refer outcome - mentions "not improving"

---

### 10. Refer: signs of secondary infection

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick **"Signs of secondary infection (sores are very painful or very swollen)"** → Next |

**Expected:** Refer outcome - mentions "secondary infection"

---

### 11. Refer: known hypersensitivity to Aciclovir

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick **"Known hypersensitivity or adverse reaction to Aciclovir 5% w/w cream"** → Next |

**Expected:** Refer outcome - mentions "hypersensitivity"

---

### 12. Refer: suspected gingivostomatitis

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick nothing → Next |
| 6 | Gingivostomatitis suspected? | **Yes** → Next |

**Expected:** Refer outcome - mentions "gingivostomatitis"

---

### 13. Refer: suspected erythema multiforme

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick nothing → Next |
| 6 | Gingivostomatitis suspected? | **No** → Next |
| 7 | Erythema multiforme suspected? | **Yes** → Next |

**Expected:** Refer outcome - mentions "erythema multiforme"

---

### 14. Refer: shingles suspected (via differential review)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick nothing → Next |
| 6 | Gingivostomatitis suspected? | **No** → Next |
| 7 | Erythema multiforme suspected? | **No** → Next |
| 8 | Mild immunocompromise / recurrent (checkboxes) | Tick nothing → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Shingles question | **Yes - Shingles (Herpes Zoster) is suspected** → Next |

**Expected:** Refer outcome - mentions "Shingles"

---

### 15. Refer: impetigo suspected (via differential review)

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick nothing → Next |
| 6 | Gingivostomatitis suspected? | **No** → Next |
| 7 | Erythema multiforme suspected? | **No** → Next |
| 8 | Mild immunocompromise / recurrent (checkboxes) | Tick nothing → Next |
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
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick nothing → Next |
| 6 | Gingivostomatitis suspected? | **No** → Next |
| 7 | Erythema multiforme suspected? | **No** → Next |
| 8 | Mild immunocompromise / recurrent (checkboxes) | Tick nothing → Next |
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
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick nothing → Next |
| 6 | Gingivostomatitis suspected? | **No** → Next |
| 7 | Erythema multiforme suspected? | **No** → Next |
| 8 | Mild immunocompromise / recurrent (checkboxes) | Tick **"mild immunocompromise"** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | **Aciclovir** → Next |

**Expected:** Refer with supply outcome - "Refer: initial limited supply may be considered", Aciclovir 5% w/w cream

---

### 18. Refer with supply: recurrent problematic cold sores

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick nothing → Next |
| 6 | Gingivostomatitis suspected? | **No** → Next |
| 7 | Erythema multiforme suspected? | **No** → Next |
| 8 | Mild immunocompromise / recurrent (checkboxes) | Tick **"recurrent problematic"** → Next |
| 9 | Differential diagnosis gate | Click **Proceed to treatment** |
| 10 | Select treatment | **Aciclovir** → Next |

**Expected:** Refer with supply outcome - "Refer: initial limited supply may be considered", Aciclovir 5% w/w cream

---

### 19. Treat: all differentials reviewed and cleared

**Patient:** Male, 30 years old

| # | Screen | Action |
|---|--------|--------|
| 1 | Patient details | Fill all fields, tick consent → Next |
| 2 | Systemically unwell? | **No** → Next |
| 3 | Urgent checks - eye lesions / moderate-to-severe immunocompromise (checkboxes) | Tick nothing → Next |
| 4 | Non-urgent checks A - pregnancy / contraindications / spreading infection / 14-day no improvement (checkboxes) | Tick nothing → Next |
| 5 | Non-urgent checks B - secondary infection / hypersensitivity to Aciclovir (checkboxes) | Tick nothing → Next |
| 6 | Gingivostomatitis suspected? | **No** → Next |
| 7 | Erythema multiforme suspected? | **No** → Next |
| 8 | Mild immunocompromise / recurrent (checkboxes) | Tick nothing → Next |
| 9 | Differential diagnosis gate | Click **Review differential diagnoses** |
| 10 | Shingles question | **No** → Next |
| 11 | Impetigo question | **No** → Next |
| 12 | SCC question | **No** → Next |
| 13 | Select treatment | **Aciclovir** → Next |

**Expected:** Treat outcome - "Suitable for treatment under the Common Conditions Service", Aciclovir 5% w/w cream, directions include "five times daily"
