
const { test, expect } = require('@playwright/test');

test('should display the publication date and "How this generalizes" section', async ({ page }) => {
  // Navigate to the specific case study page
  await page.goto('http://localhost:8000/cards_indiv.html?project=0');

  // Wait for the dynamic content to load by checking for the project title
  await page.waitForSelector('#main-title');

  // Check for the publication date
  const publicationDate = page.locator('#case-date');
  await expect(publicationDate).toBeVisible();
  await expect(publicationDate).toContainText('2023-10-26');

  // Find the "How this generalizes" section heading
  const generalizesSection = page.locator('h3:has-text("How this generalizes")');
  await expect(generalizesSection).toBeVisible();

  // Scroll the section into view to ensure it's not off-screen
  await generalizesSection.scrollIntoViewIfNeeded();

  // Check that the text content is correctly populated
  const generalizesText = page.locator('#generalizes-text');
  await expect(generalizesText).toContainText("Institutional firms spend millions on analysts to vet deals overnight.");

  // Take a screenshot for visual confirmation
  await page.screenshot({ path: 'verification.png' });
});
