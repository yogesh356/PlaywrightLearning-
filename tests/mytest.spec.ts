import { test, expect } from '@playwright/test';
test('Verify the  First Test', async({ page }) => {
await page.goto("https://www.google.com");
let tie:string = await page.title();
console.log(tie); 
await expect (page).toHaveTitle("Google");
});




