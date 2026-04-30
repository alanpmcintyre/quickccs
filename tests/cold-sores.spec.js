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

async function startColdSores(page) {
  await page.locator('.ccard.avail:has-text("Cold Sores")').click();
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

// Clicks a single-choice option then Next.
async function pickOpt(page, text) {
  await page.locator('.opt').filter({ hasText: text }).first().click();
  await page.locator('.screen.active button.btnnext').click();
}

// Advances past the differential diagnosis gate without reviewing differentials.
async function proceedToTreatment(page) {
  await page.click('button:has-text("Proceed to treatment")');
}

// Opens the full differential diagnosis review.
async function reviewDifferentials(page) {
  await page.click('button:has-text("Review differential diagnoses")');
}

// Navigates through all exclusion screens with No, up to and including the dd_gate.
async function clearExclusions(page) {
  await pickOpt(page, 'No');   // cs_emergency
  await pickOpt(page, 'No');   // cs_urgent_checks
  await pickOpt(page, 'No');   // cs_nourgent_checks
  await pickOpt(page, 'No');   // cs_nourgent_checks_b
  await pickOpt(page, 'No');   // cs_gingivostomatitis
  await pickOpt(page, 'No');   // cs_erythema_multiforme
  await pickOpt(page, 'No');   // cs_mild_immuno_recurrent
  await proceedToTreatment(page);
}

// ── Tests ─────────────────────────────────────────────────────────────────────

test.describe('Cold Sores', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await startColdSores(page);
  });

  // ── Happy path ────────────────────────────────────────────────────────────

  test('treat: standard adult, no exclusions → Aciclovir cream', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await clearExclusions(page);
    await pickOpt(page, 'Aciclovir');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'treat');
    await expect(page.getByTestId('outcome-alert')).toContainText('Suitable for treatment under the Common Conditions Service');
    await expect(page.getByTestId('section-treatment')).toContainText('Aciclovir 5% w/w cream');
    await expect(page.getByTestId('section-directions')).toContainText('five times daily');
  });

  // ── Emergency ─────────────────────────────────────────────────────────────

  test('emergency: systemically unwell', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'Yes');                                           // cs_emergency → immediate exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'emergency');
    await expect(page.getByTestId('outcome-alert')).toContainText('Emergency referral required');
    await expect(page.getByTestId('outcome-alert')).toContainText('999');
  });

  // ── Urgent ────────────────────────────────────────────────────────────────

  test('urgent: infant under 1 month exits immediately after patient step', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(0, 0, 15) });                   // 15 days old

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'urgent');
    await expect(page.getByTestId('outcome-alert')).toContainText('Urgent medical assessment required');
    await expect(page.getByTestId('outcome-alert')).toContainText('under 1 month');
  });

  test('urgent: lesions on or involving the eye', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'Yes');                                           // cs_urgent_checks → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'urgent');
    await expect(page.getByTestId('outcome-alert')).toContainText('urgent referral criteria');
  });

  test('urgent: moderate to severe immunocompromise', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'Yes');                                           // cs_urgent_checks → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'urgent');
    await expect(page.getByTestId('outcome-alert')).toContainText('Urgent medical assessment required');
  });

  // ── Refer ─────────────────────────────────────────────────────────────────

  test('refer: pregnancy', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'Yes');                                           // cs_nourgent_checks → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('non-urgent referral criteria');
  });

  test('refer: signs of infection spreading', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'Yes');                                           // cs_nourgent_checks → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Refer: outside service scope');
  });

  test('refer: contraindications as per SPC', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'Yes');                                           // cs_nourgent_checks → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('non-urgent referral criteria');
  });

  test('refer: symptoms not improving within 14 days', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'Yes');                                           // cs_nourgent_checks → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('non-urgent referral criteria');
  });

  test('refer: signs of secondary infection', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'Yes');                                           // cs_nourgent_checks_b → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('non-urgent referral criteria');
  });

  test('refer: known hypersensitivity to Aciclovir', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'Yes');                                           // cs_nourgent_checks_b → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('non-urgent referral criteria');
  });

  test('refer: suspected gingivostomatitis', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks_b
    await pickOpt(page, 'Yes');                                           // cs_gingivostomatitis → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('gingivostomatitis');
  });

  test('refer: suspected erythema multiforme', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks_b
    await pickOpt(page, 'No');                                            // cs_gingivostomatitis
    await pickOpt(page, 'Yes');                                           // cs_erythema_multiforme → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('erythema multiforme');
  });

  test('refer: shingles suspected via differential diagnosis review', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks_b
    await pickOpt(page, 'No');                                            // cs_gingivostomatitis
    await pickOpt(page, 'No');                                            // cs_erythema_multiforme
    await pickOpt(page, 'No');                                            // cs_mild_immuno_recurrent
    await reviewDifferentials(page);
    await pickOpt(page, 'Yes - Shingles (Herpes Zoster) is suspected');  // cs_dd_shingles → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Shingles');
  });

  test('refer: impetigo suspected via differential diagnosis review', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks_b
    await pickOpt(page, 'No');                                            // cs_gingivostomatitis
    await pickOpt(page, 'No');                                            // cs_erythema_multiforme
    await pickOpt(page, 'No');                                            // cs_mild_immuno_recurrent
    await reviewDifferentials(page);
    await pickOpt(page, 'No');                                            // cs_dd_shingles
    await pickOpt(page, 'Yes - Impetigo is suspected');                   // cs_dd_impetigo → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Impetigo');
  });

  test('refer: squamous cell carcinoma suspected via differential diagnosis review', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks_b
    await pickOpt(page, 'No');                                            // cs_gingivostomatitis
    await pickOpt(page, 'No');                                            // cs_erythema_multiforme
    await pickOpt(page, 'No');                                            // cs_mild_immuno_recurrent
    await reviewDifferentials(page);
    await pickOpt(page, 'No');                                            // cs_dd_shingles
    await pickOpt(page, 'No');                                            // cs_dd_impetigo
    await pickOpt(page, 'Yes - Squamous cell carcinoma of the lip is suspected'); // cs_dd_scc → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Squamous cell carcinoma');
  });

  // ── Refer with supply ─────────────────────────────────────────────────────

  test('refer_supply: mild immunocompromise → treatment supplied while referring', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks_b
    await pickOpt(page, 'No');                                            // cs_gingivostomatitis
    await pickOpt(page, 'No');                                            // cs_erythema_multiforme
    await pickOpt(page, 'Yes');                                           // cs_mild_immuno_recurrent
    await proceedToTreatment(page);
    await pickOpt(page, 'Aciclovir');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer_supply');
    await expect(page.getByTestId('outcome-alert')).toContainText('Refer: initial limited supply may be considered');
    await expect(page.getByTestId('section-treatment')).toContainText('Aciclovir 5% w/w cream');
  });

  test('refer_supply: recurrent problematic cold sores → treatment supplied while referring', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks_b
    await pickOpt(page, 'No');                                            // cs_gingivostomatitis
    await pickOpt(page, 'No');                                            // cs_erythema_multiforme
    await pickOpt(page, 'Yes');                                           // cs_mild_immuno_recurrent
    await proceedToTreatment(page);
    await pickOpt(page, 'Aciclovir');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer_supply');
    await expect(page.getByTestId('outcome-alert')).toContainText('Refer: initial limited supply may be considered');
    await expect(page.getByTestId('section-treatment')).toContainText('Aciclovir 5% w/w cream');
  });

  // ── Treat via full differential review ───────────────────────────────────

  test('treat: all differentials reviewed and cleared → Aciclovir cream', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30) });
    await pickOpt(page, 'No');                                            // cs_emergency
    await pickOpt(page, 'No');                                            // cs_urgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks
    await pickOpt(page, 'No');                                            // cs_nourgent_checks_b
    await pickOpt(page, 'No');                                            // cs_gingivostomatitis
    await pickOpt(page, 'No');                                            // cs_erythema_multiforme
    await pickOpt(page, 'No');                                            // cs_mild_immuno_recurrent
    await reviewDifferentials(page);
    await pickOpt(page, 'No');                                            // cs_dd_shingles
    await pickOpt(page, 'No');                                            // cs_dd_impetigo
    await pickOpt(page, 'No');                                            // cs_dd_scc
    await pickOpt(page, 'Aciclovir');

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'treat');
    await expect(page.getByTestId('outcome-alert')).toContainText('Suitable for treatment under the Common Conditions Service');
    await expect(page.getByTestId('section-treatment')).toContainText('Aciclovir 5% w/w cream');
    await expect(page.getByTestId('section-directions')).toContainText('five times daily');
  });
});
