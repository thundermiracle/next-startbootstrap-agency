import { devices, defineConfig } from '@playwright/test';

export default defineConfig({
  workers: process.env.CI ? '100%' : undefined,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], locale: 'ja-JP' },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], locale: 'ja-JP' },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], locale: 'ja-JP' },
    },
    {
      name: 'chromium mobile',
      use: { ...devices['Galaxy S9+'], locale: 'ja-JP' },
    },
    {
      name: 'webkit mobile',
      use: { ...devices['iPhone 13'], locale: 'ja-JP' },
    },
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  reporter: 'html',
});
