import { test, expect } from '@playwright/test';

test('Scenario 1: Open main page and check elements', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Vite App|Todo/); 
  await expect(page.getByText('Список завдань')).toBeVisible();
  
 
  await page.screenshot({ path: 'e2e/screenshots/homepage.png' });
});

test('Scenario 2: CRUD Operations', async ({ page }) => {
  await page.goto('/');

  await page.fill('#title', 'Playwright Task');
  await page.fill('#description', 'Testing CRUD');
  await page.selectOption('#priority', 'high');
  await page.click('.btn-submit');

  await expect(page.getByText('Playwright Task')).toBeVisible();


  await page.locator('.btn-delete').first().click();
  
  await expect(page.getByText('Playwright Task')).not.toBeVisible();
});


test('Scenario 3: Filtering tasks', async ({ page }) => {
  await page.goto('/');


  await page.fill('#title', 'Active Task');
  await page.fill('#description', 'desc');
  await page.selectOption('#priority', 'low');
  await page.click('.btn-submit');


  await page.selectOption('#filter-status', 'done');


  await expect(page.getByText('Active Task')).toBeHidden();

  await page.selectOption('#filter-status', 'active');

  await expect(page.getByText('Active Task')).toBeVisible();
});
