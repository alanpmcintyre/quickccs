import { test, expect } from '@playwright/test';

// ── Helpers ──────────────────────────────────────────────────────────────────

function dobOf(yearsAgo = 0, monthsAgo = 0, daysAgo = 0) {
  const d = new Date();
  d.setDate(1);
  d.setFullYear(d.getFullYear() - yearsAgo);
  d.setMonth(d.getMonth() - monthsAgo);
  if (daysAgo) {
    const d2 = new Date();
    d2.setDate(d2.getDate() - daysAgo);
    return d2.toISOString().split('T')[0];
  }
  return d.toISOString().split('T')[0];
}

async function login(page) {
  await page.goto('/');
  await page.click('button:has-text("Continue to sign in")');
  await page.fill('#ph-name', 'Test Pharmacist');
  await page.fill('#ph-psi', '12345');
  await page.fill('#ph-contract', 'CCS00001');
  await page.fill('#ph-pharmacy', 'Test Pharmacy');
  await page.fill('#ph-address', '1 Main Street, Dublin');
  await page.fill('#ph-phone', '01 234 5678');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
}

async function startImpetigo(page) {
  await page.locator('.ccard.avail:has-text("Impetigo")').click();
  await page.check('#disclaimerCb');
  await page.click('#btnstart');
  await page.locator('#ocard button.btnnext').click();
}

async function fillPatient(page, { name = 'Test Patient', dob, sex = 'Male', address = '1 Main St, Dublin' }) {
  await page.fill('#pt-name', name);
  await page.fill('#pt-dob', dob);
  await page.selectOption('#pt-sex', sex);
  await page.fill('#pt-address', address);
  await page.fill('#pt-phone', '01 234 5678');
  await page.check('#pt-consent');
  await page.locator('.screen.active button.btnnext').click();
}

async function pickOpt(page, text) {
  await page.locator('.opt').filter({ hasText: text }).first().click();
  await page.locator('.screen.active button.btnnext').click();
}

async function proceedToTreatment(page) {
  await page.click('button:has-text("Proceed to treatment")');
}

async function reviewDifferentials(page) {
  await page.click('button:has-text("Review differential diagnoses")');
}

// Clears all 6 exclusion steps (imp_emergency through imp_mild_immuno) with No
// and clicks Proceed to treatment at the DD gate.
async function clearExclusions(page) {
  await pickOpt(page, 'No');  // imp_emergency
  await pickOpt(page, 'No');  // imp_urgent_checks
  await pickOpt(page, 'No');  // imp_lesion_site
  await pickOpt(page, 'No');  // imp_treatment_history
  await pickOpt(page, 'No');  // imp_contraindications
  await pickOpt(page, 'No');  // imp_mild_immuno
  await proceedToTreatment(page);
}

// ── Tests ─────────────────────────────────────────────────────────────────────

test.describe('Impetigo', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await startImpetigo(page);
  });

  // ── Treat ─────────────────────────────────────────────────────────────────

  test('1. treat: adult, no exclusions → Fusidic Acid cream', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await clearExclusions(page);
    await pickOpt(page, 'Fusidic Acid (Fucidin) 20mg/g cream');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'treat');
    await expect(page.getByTestId('outcome-alert')).toContainText('Suitable for treatment under the Common Conditions Service');
    await expect(page.getByTestId('section-treatment')).toContainText('Fusidic Acid (Fucidin) 20mg/g cream');
    await expect(page.getByTestId('section-directions')).toContainText('every 8 hours');
  });

  test('2. treat: adult, no exclusions → Sodium Fusidate ointment', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await clearExclusions(page);
    await pickOpt(page, 'Sodium Fusidate (Fucidin) 20mg/g ointment');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'treat');
    await expect(page.getByTestId('outcome-alert')).toContainText('Suitable for treatment under the Common Conditions Service');
    await expect(page.getByTestId('section-treatment')).toContainText('Sodium Fusidate (Fucidin) 20mg/g ointment');
    await expect(page.getByTestId('section-directions')).toContainText('every 8 hours');
  });

  test('3. treat: child aged exactly 2 months (minimum age) → Fusidic Acid cream', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(0, 2) });
    await clearExclusions(page);
    await pickOpt(page, 'Fusidic Acid (Fucidin) 20mg/g cream');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'treat');
    await expect(page.getByTestId('section-treatment')).toContainText('Fusidic Acid (Fucidin) 20mg/g cream');
  });

  test('4. treat: all differentials reviewed and cleared → Fusidic Acid cream', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'No');  // imp_bullous
    await pickOpt(page, 'No');  // imp_dd_shingles
    await pickOpt(page, 'No');  // imp_dd_cold_sores
    await pickOpt(page, 'No');  // imp_dd_candida
    await pickOpt(page, 'No');  // imp_dd_psoriasis
    await pickOpt(page, 'No');  // imp_dd_tinea
    await pickOpt(page, 'No');  // imp_dd_eczema
    await pickOpt(page, 'No');  // imp_dd_contact_dermatitis
    await pickOpt(page, 'No');  // imp_dd_scabies
    await pickOpt(page, 'Fusidic Acid (Fucidin) 20mg/g cream');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'treat');
    await expect(page.getByTestId('outcome-alert')).toContainText('Suitable for treatment under the Common Conditions Service');
    await expect(page.getByTestId('section-treatment')).toContainText('Fusidic Acid (Fucidin) 20mg/g cream');
  });

  // ── Emergency ─────────────────────────────────────────────────────────────

  test('5. emergency: systemically very unwell / severe infection / sepsis', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'Yes');  // imp_emergency → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'emergency');
    await expect(page.getByTestId('outcome-alert')).toContainText('999');
  });

  // ── Urgent ────────────────────────────────────────────────────────────────

  test('6. urgent: signs of serious condition / moderate-severe immunocompromise / complications', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');   // imp_emergency
    await pickOpt(page, 'Yes');  // imp_urgent_checks → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'urgent');
    await expect(page.getByTestId('outcome-alert')).toContainText('Urgent medical assessment required');
  });

  // ── Refer: age ────────────────────────────────────────────────────────────

  test('7. refer: infant under 2 months → immediate exit after patient step', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(0, 0, 30) });  // 30 days old

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('under 2 months');
  });

  // ── Refer: step 4 — imp_lesion_site ──────────────────────────────────────
  // Covers: widespread (4+ lesions), breastfeeding with breast lesion, SPC contraindications

  test('8. refer: widespread impetigo / breastfeeding with breast lesion / SPC contraindications (step 4)', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');   // imp_emergency
    await pickOpt(page, 'No');   // imp_urgent_checks
    await pickOpt(page, 'Yes');  // imp_lesion_site → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('non-urgent referral criteria');
  });

  // ── Refer: step 5 — imp_treatment_history ────────────────────────────────
  // Covers: recurrent (2+ episodes), active skin condition, open wounds, previous treatment failure

  test('9. refer: recurrent impetigo / active skin condition / open wounds / previous treatment failure (step 5)', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');   // imp_emergency
    await pickOpt(page, 'No');   // imp_urgent_checks
    await pickOpt(page, 'No');   // imp_lesion_site
    await pickOpt(page, 'Yes');  // imp_treatment_history → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('non-urgent referral criteria');
  });

  // ── Refer: step 6 — imp_contraindications ────────────────────────────────
  // Covers: already on oral antibiotics, fusidic acid in past 12 months, fire hazard, hypersensitivity

  test('10. refer: oral antibiotics / fusidic acid history / fire hazard / hypersensitivity (step 6)', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');   // imp_emergency
    await pickOpt(page, 'No');   // imp_urgent_checks
    await pickOpt(page, 'No');   // imp_lesion_site
    await pickOpt(page, 'No');   // imp_treatment_history
    await pickOpt(page, 'Yes');  // imp_contraindications → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('non-urgent referral criteria');
  });

  // ── Refer: step 7 — imp_mild_immuno ──────────────────────────────────────

  test('11. refer: mildly to moderately immunocompromised — refer without supply (step 7)', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');   // imp_emergency
    await pickOpt(page, 'No');   // imp_urgent_checks
    await pickOpt(page, 'No');   // imp_lesion_site
    await pickOpt(page, 'No');   // imp_treatment_history
    await pickOpt(page, 'No');   // imp_contraindications
    await pickOpt(page, 'Yes - refer without supply');  // imp_mild_immuno → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('immunocompromised');
  });

  // ── Refer: differential diagnoses ────────────────────────────────────────

  test('12. refer: bullous impetigo suspected (differential diagnosis)', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'Yes - bullous impetigo is suspected');  // imp_bullous → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Bullous impetigo');
  });

  test('13. refer: shingles (Herpes Zoster) suspected', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'No');  // imp_bullous
    await pickOpt(page, 'Yes - Shingles (Herpes Zoster) is suspected');  // imp_dd_shingles → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Shingles');
  });

  test('14. refer: cold sore (Herpes Simplex Virus) suspected', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'No');  // imp_bullous
    await pickOpt(page, 'No');  // imp_dd_shingles
    await pickOpt(page, 'Yes - Cold sore (HSV) is suspected');  // imp_dd_cold_sores → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Cold sores');
  });

  test('15. refer: cutaneous Candida infection suspected', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'No');  // imp_bullous
    await pickOpt(page, 'No');  // imp_dd_shingles
    await pickOpt(page, 'No');  // imp_dd_cold_sores
    await pickOpt(page, 'Yes - Cutaneous Candida is suspected');  // imp_dd_candida → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('candidiasis');
  });

  test('16. refer: guttate psoriasis suspected', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'No');  // imp_bullous
    await pickOpt(page, 'No');  // imp_dd_shingles
    await pickOpt(page, 'No');  // imp_dd_cold_sores
    await pickOpt(page, 'No');  // imp_dd_candida
    await pickOpt(page, 'Yes - Guttate Psoriasis is suspected');  // imp_dd_psoriasis → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('psoriasis');
  });

  test('17. refer: dermatophytosis (Tinea / ringworm) suspected', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'No');  // imp_bullous
    await pickOpt(page, 'No');  // imp_dd_shingles
    await pickOpt(page, 'No');  // imp_dd_cold_sores
    await pickOpt(page, 'No');  // imp_dd_candida
    await pickOpt(page, 'No');  // imp_dd_psoriasis
    await pickOpt(page, 'Yes - Dermatophytosis (Tinea) is suspected');  // imp_dd_tinea → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Dermatophytosis');
  });

  test('18. refer: atopic dermatitis (eczema) suspected', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'No');  // imp_bullous
    await pickOpt(page, 'No');  // imp_dd_shingles
    await pickOpt(page, 'No');  // imp_dd_cold_sores
    await pickOpt(page, 'No');  // imp_dd_candida
    await pickOpt(page, 'No');  // imp_dd_psoriasis
    await pickOpt(page, 'No');  // imp_dd_tinea
    await pickOpt(page, 'Yes - atopic dermatitis (eczema) is suspected');  // imp_dd_eczema → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Atopic dermatitis');
  });

  test('19. refer: contact dermatitis suspected', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'No');  // imp_bullous
    await pickOpt(page, 'No');  // imp_dd_shingles
    await pickOpt(page, 'No');  // imp_dd_cold_sores
    await pickOpt(page, 'No');  // imp_dd_candida
    await pickOpt(page, 'No');  // imp_dd_psoriasis
    await pickOpt(page, 'No');  // imp_dd_tinea
    await pickOpt(page, 'No');  // imp_dd_eczema
    await pickOpt(page, 'Yes - contact dermatitis is suspected');  // imp_dd_contact_dermatitis → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Contact dermatitis');
  });

  test('20. refer: scabies suspected', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'No');  // imp_mild_immuno
    await reviewDifferentials(page);
    await pickOpt(page, 'No');  // imp_bullous
    await pickOpt(page, 'No');  // imp_dd_shingles
    await pickOpt(page, 'No');  // imp_dd_cold_sores
    await pickOpt(page, 'No');  // imp_dd_candida
    await pickOpt(page, 'No');  // imp_dd_psoriasis
    await pickOpt(page, 'No');  // imp_dd_tinea
    await pickOpt(page, 'No');  // imp_dd_eczema
    await pickOpt(page, 'No');  // imp_dd_contact_dermatitis
    await pickOpt(page, 'Yes - scabies is suspected');  // imp_dd_scabies → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Scabies');
  });

  // ── Refer with supply ─────────────────────────────────────────────────────

  test('21. refer_supply: mild immunocompromise → initial limited supply, Fusidic Acid cream', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'Yes - provide initial limited supply and refer');  // imp_mild_immuno
    await proceedToTreatment(page);
    await pickOpt(page, 'Fusidic Acid (Fucidin) 20mg/g cream');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer_supply');
    await expect(page.getByTestId('outcome-alert')).toContainText('initial limited supply may be considered');
    await expect(page.getByTestId('section-treatment')).toContainText('Fusidic Acid (Fucidin) 20mg/g cream');
  });

  test('22. refer_supply: mild immunocompromise → initial limited supply, Sodium Fusidate ointment', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');  // imp_emergency
    await pickOpt(page, 'No');  // imp_urgent_checks
    await pickOpt(page, 'No');  // imp_lesion_site
    await pickOpt(page, 'No');  // imp_treatment_history
    await pickOpt(page, 'No');  // imp_contraindications
    await pickOpt(page, 'Yes - provide initial limited supply and refer');  // imp_mild_immuno
    await proceedToTreatment(page);
    await pickOpt(page, 'Sodium Fusidate (Fucidin) 20mg/g ointment');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer_supply');
    await expect(page.getByTestId('outcome-alert')).toContainText('initial limited supply may be considered');
    await expect(page.getByTestId('section-treatment')).toContainText('Sodium Fusidate (Fucidin) 20mg/g ointment');
  });
});
