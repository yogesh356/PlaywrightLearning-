import { test,expect } from "@playwright/test";


test("Verify the Locator Testing ",async({page}) =>{
await page.goto("https://www.nopcommerce.com")
const logo=page.getByAltText("nopCommerce");
await expect(logo).toBeVisible();

}
) 