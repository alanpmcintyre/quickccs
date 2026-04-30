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

async function startOralThrush(page) {
  await page.locator('.ccard.avail:has-text("Oral Thrush")').click();
  await page.check('#disclaimerCb');
  await page.click('#btnstart');
  await page.locator('#ocard button.btnnext').click();
}

async function fillPatient(page, { name = 'Test Patient', dob, sex, address = '1 Main St, Dublin' }) {
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

async function tickCb(page, ...labels) {
  for (const label of labels) {
    await page.locator('.cbopt').filter({ hasText: label }).first().click();
  }
  await page.locator('.screen.active button.btnnext').click();
}

// ── Tests ─────────────────────────────────────────────────────────────────────

test.describe('Oral Thrush', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await startOralThrush(page);
  });

  // ── Happy path ────────────────────────────────────────────────────────────

  test('treat: adult female, first episode, white patches → Miconazole 2.5ml', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30), sex: 'Female' });
    await pickOpt(page, 'No');                                            // systemic
    await pickOpt(page, 'No');                                            // immunocompromise
    await pickOpt(page, 'No');                                            // pregnant
    await pickOpt(page, 'White patches present, they rub off easily');    // lesion_type
    await pickOpt(page, 'Less than 14 days');                             // duration
    await pickOpt(page, 'No, this is a first episode');                   // recurrent
    await pickOpt(page, 'No');                                            // swallowing
    await pickOpt(page, 'No');                                            // new_med
    await tickCb(page, 'White patches inside mouth');                     // symptoms
    await pickOpt(page, 'No');                                            // dentures
    await pickOpt(page, 'No');                                            // inhaled_steroids
    await pickOpt(page, 'No');                                            // breastfeeding_mother
    // breastfeeding_infant is skipped for patients aged 2+ years
    await pickOpt(page, 'No');                                            // warfarin
    await pickOpt(page, 'No known allergies');                            // allergy

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'treat');
    await expect(page.getByTestId('outcome-alert')).toContainText('Suitable for treatment under the Common Conditions Service');
    await expect(page.getByTestId('section-treatment')).toContainText('Miconazole 20mg/g oral gel');
    await expect(page.getByTestId('section-treatment')).toContainText('2.5ml');
  });

  // ── Emergency ─────────────────────────────────────────────────────────────

  test('emergency: patient is systemically unwell', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30), sex: 'Female' });
    await pickOpt(page, 'Yes, signs of severe illness');                  // systemic → immediate exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'emergency');
    await expect(page.getByTestId('outcome-alert')).toContainText('Emergency referral required');
  });

  // ── Urgent ────────────────────────────────────────────────────────────────

  test('urgent: moderate to severe immunocompromise', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30), sex: 'Female' });
    await pickOpt(page, 'No');                                            // systemic
    await pickOpt(page, 'Yes, moderate to severe');                       // immunocompromise → immediate exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'urgent');
    await expect(page.getByTestId('outcome-alert')).toContainText('Urgent medical assessment required');
  });

  // ── Refer ─────────────────────────────────────────────────────────────────

  test('refer: infant under 1 month old exits immediately after patient step', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(0, 0, 15), sex: 'Female' });    // 15 days old

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('under 1 month');
  });

  test('refer: pregnancy', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30), sex: 'Female' });
    await pickOpt(page, 'No');                                            // systemic
    await pickOpt(page, 'No');                                            // immunocompromise
    await pickOpt(page, 'Yes');                                           // pregnant → immediate exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('Pregnancy');
  });

  test('refer: white patches do not rub off', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30), sex: 'Female' });
    await pickOpt(page, 'No');                                            // systemic
    await pickOpt(page, 'No');                                            // immunocompromise
    await pickOpt(page, 'No');                                            // pregnant
    await pickOpt(page, 'White patches or plaques present, they do not rub off'); // lesion_type → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('do not rub off');
  });

  test('refer: symptoms present for 14 days or more', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30), sex: 'Male' });
    await pickOpt(page, 'No');                                            // systemic
    await pickOpt(page, 'No');                                            // immunocompromise
    // pregnant skipped for Male
    await pickOpt(page, 'White patches present, they rub off easily');    // lesion_type
    await pickOpt(page, '14 days or more');                               // duration → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer');
    await expect(page.getByTestId('outcome-alert')).toContainText('14 days');
  });

  // ── Refer with supply ─────────────────────────────────────────────────────

  test('refer_supply: recurrence of oral thrush', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30), sex: 'Male' });
    await pickOpt(page, 'No');                                            // systemic
    await pickOpt(page, 'No');                                            // immunocompromise
    await pickOpt(page, 'White patches present, they rub off easily');    // lesion_type
    await pickOpt(page, 'Less than 14 days');                             // duration
    await pickOpt(page, 'Yes, recurrence');                               // recurrent → exit

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'refer_supply');
    await expect(page.getByTestId('outcome-alert')).toContainText('Refer: initial limited supply may be considered');
  });

  // ── Drug interaction ──────────────────────────────────────────────────────

  test('treat: warfarin → Nystatin prescribed instead of Miconazole', async ({ page }) => {
    await fillPatient(page, { dob: dobOf(30), sex: 'Male' });
    await pickOpt(page, 'No');                                            // systemic
    await pickOpt(page, 'No');                                            // immunocompromise
    // pregnant skipped for Male
    await pickOpt(page, 'White patches present, they rub off easily');
    await pickOpt(page, 'Less than 14 days');
    await pickOpt(page, 'No, this is a first episode');
    await pickOpt(page, 'No');                                            // swallowing
    await pickOpt(page, 'No');                                            // new_med
    await tickCb(page, 'White patches inside mouth');                     // symptoms
    await pickOpt(page, 'No');                                            // dentures
    await pickOpt(page, 'No');                                            // inhaled_steroids
    // breastfeeding_mother and breastfeeding_infant both skipped (Male, age >= 2)
    await pickOpt(page, 'Yes - warfarin or interacting drug');            // warfarin
    await pickOpt(page, 'No known allergies');                            // allergy

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'treat');
    await expect(page.getByTestId('outcome-alert')).toContainText('Suitable for treatment under the Common Conditions Service');
    await expect(page.getByTestId('section-treatment')).toContainText('Nystatin');
    await expect(page.getByTestId('section-treatment')).not.toContainText('Miconazole 20mg/g oral gel');
  });

  // ── Breastfed infant ──────────────────────────────────────────────────────

  test('treat: breastfed infant → Miconazole 1.25ml + contemporaneous mother nipple treatment', async ({ page }) => {
    await fillPatient(page, { name: 'Baby Murphy', dob: dobOf(0, 6), sex: 'Male' });
    await pickOpt(page, 'No');                                            // systemic
    await pickOpt(page, 'No');                                            // immunocompromise
    // pregnant and breastfeeding_mother skipped (Male and age < 12)
    await pickOpt(page, 'White patches present, they rub off easily');
    await pickOpt(page, 'Less than 14 days');
    await pickOpt(page, 'No, this is a first episode');
    await pickOpt(page, 'No');                                            // swallowing
    await pickOpt(page, 'No');                                            // new_med
    await tickCb(page, 'White patches inside mouth');                     // symptoms
    await pickOpt(page, 'No');                                            // dentures
    await pickOpt(page, 'No');                                            // inhaled_steroids
    await pickOpt(page, 'Yes');                                           // breastfeeding_infant
    await pickOpt(page, 'No');                                            // warfarin
    await pickOpt(page, 'No known allergies');                            // allergy

    await expect(page.getByTestId('outcome-alert')).toHaveAttribute('data-outcome', 'treat');
    await expect(page.getByTestId('outcome-alert')).toContainText('Suitable for treatment under the Common Conditions Service');
    await expect(page.getByTestId('section-treatment')).toContainText('1.25ml');
    await expect(page.getByTestId('section-breast-rx')).toContainText('Breastfeeding mother');
    await expect(page.getByTestId('section-breast-rx')).toContainText('Miconazole Cream 2%');
  });
});
