
import { test, expect } from '@playwright/test';

test('E2E: Add and Delete Task', async ({ page }) => {

  await page.goto('/');


  await page.fill('#title', 'E2E Task');
  await page.fill('#description', 'Testing with Playwright');
  await page.selectOption('#priority', 'high');
  await page.click('button[type="submit"]');

  await expect(page.getByText('E2E Task')).toBeVisible();

  await page.locator('.btn-delete').first().click();

  await expect(page.getByText('E2E Task')).not.toBeVisible();
});