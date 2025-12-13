const { test, expect } = require('@playwright/test');

test('should display the tech stack section', async ({ page }) => {
  // Navigate to the specific case study page for a project with a tech stack
  await page.goto('http://localhost:8000/cards_indiv.html?id=job-skills');

  // Wait for the dynamic content to load by checking for the project title
  await page.waitForSelector('#main-title');

  // Find the "Tech Stack" section
  const techStackContainer = page.locator('#tech-stack-container');
  await expect(techStackContainer).toBeVisible();

  // Scroll the section into view to ensure it's not off-screen
  await techStackContainer.scrollIntoViewIfNeeded();

  // Check that the heading is correct
  const heading = techStackContainer.locator('h3');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Tech Stack');

  // Check that the list container is visible
  const listContainer = techStackContainer.locator('div.flex.flex-wrap');
  await expect(listContainer).toBeVisible();

  // Check that at least one tech item is visible
  const firstItem = listContainer.locator('div').first();
  await expect(firstItem).toBeVisible();

  // Take a screenshot for visual confirmation
  await page.screenshot({ path: '/home/jules/verification/verification.png' });
});
