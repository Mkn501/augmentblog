
const { test, expect } = require('@playwright/test');

test('should display the "How this generalizes" section', async ({ page }) => {
  // Navigate to the specific case study page
  await page.goto('http://localhost:8000/cards_indiv.html?project=0');

  // Wait for the dynamic content to load by checking for the project title
  await page.waitForSelector('#main-title');

  // Find the "How this generalizes" section heading
  const generalizesSection = page.locator('h3:has-text("How this generalizes")');
  await expect(generalizesSection).toBeVisible();

  // Scroll the section into view to ensure it's not off-screen
  await generalizesSection.scrollIntoViewIfNeeded();

  // Check that the text content is correctly populated
  const generalizesText = page.locator('#generalizes-text');
  await expect(generalizesText).toContainText("The 'Reverse Calculator' model can be applied to any asset class");

  // Take a screenshot for visual confirmation
  await page.screenshot({ path: 'verification.png' });
});
