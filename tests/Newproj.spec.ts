import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://example1.com');
    await expect(page).toHaveTitle(/Example Domain/);
});
