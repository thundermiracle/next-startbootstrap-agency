import { test, expect } from '@playwright/test';

test('visual landing page test', async ({ page }) => {
  await page.goto('');

  // remove vercel live comments part
  const vercelPreviewComments = await page.$('vercel-live-feedback');
  if (vercelPreviewComments) {
    await vercelPreviewComments.evaluate((node) => node.remove());
  }

  await expect(page).toHaveScreenshot({ fullPage: true });
});
