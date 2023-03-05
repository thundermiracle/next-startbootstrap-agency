import { test, expect } from '@playwright/test';

test('visual landing page test', async ({ page }) => {
  await page.goto('');

  try {
    const vercelPreviewComments = await page.waitForSelector('vercel-live-feedback', {
      timeout: 1000,
    });
    await vercelPreviewComments.evaluate((node) => node.remove());
  } catch {
    // eslint-disable-next-line no-console
    console.log("vercel preview comments doesn't exist");
  }

  await expect(page).toHaveScreenshot({ fullPage: true });
});
