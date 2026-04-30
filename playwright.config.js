import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://127.0.0.1:5500',
    headless: false,        // false = you can WATCH it run, change to true later
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npx serve . --listen 5500 --no-clipboard',
    url: 'http://127.0.0.1:5500',
    reuseExistingServer: true,
  },
});