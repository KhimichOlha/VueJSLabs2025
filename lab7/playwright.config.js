// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e', // Папка, яку ви вказали при встановленні
  fullyParallel: true,
  reporter: 'html',
  
  use: {
    baseURL: 'http://localhost:5173', // Важливо: порт вашого Vite сервера
    trace: 'on-first-retry',
  },

  /* Налаштування запуску локального сервера перед тестами */
  webServer: {
    command: 'npm run dev', // Команда запуску вашого сайту
    url: 'http://localhost:5173', // Адреса, на якій чекати сайт
    reuseExistingServer: !process.env.CI,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Інші браузери можна закоментувати, якщо хочете швидше
  ],
});
