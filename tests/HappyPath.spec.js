const { test, expect } = require('@playwright/test');
const { accessSync } = require('fs');
const { url } = require('inspector');
const { before } = require('node:test');
const { timeout } = require('../playwright.config');
const exp = require('constants');
const {LoginPage} = require('../PageObjects/Loginpage');
const {PDP} = require('../PageObjects/PDP');
const {Checkoutpage} = require('../PageObjects/Checkoutpage');



test.only ('TEST orderplace',async({browser})=>{
    
    const context = await browser.newContext(); 
    const page = await context.newPage();
    const loginpage = new LoginPage(page);
    const PDPPage = new PDP(page);
    const checkout = new Checkoutpage(page);
    const email = 'test121@gmail.com'
    const password = 'Makhdoom12#'

// Popups
    await page.addLocatorHandler(page.getByText('wait...before you go'), async () => {
    await page.getByRole('button', { name: 'No, thanks' }).click();});
    
    await page.addLocatorHandler(page.getByText('Uniform Advantage VIP?'), async () => {
    await page.getByRole('button', { name: 'No, thanks' }).click();});

    await page.addLocatorHandler(page.getByText('connect + save!'), async () => {
        await page.getByRole('button', { name: 'No, thanks' }).click();});

// Login Page
    await loginpage.Goto();
    await loginpage.validlogin(email,password);
    await page.waitForTimeout(5000);


    // await page.locator("#login-form-email").fill('test002@gmail.com')
    // await page.locator("#login-form-password").fill("Makhdoom12#")
    // await page.locator(".login-columns button").click()
    // await page.locator(".card-title").first().waitFor({state:"visible"})


// PLP 
for (let i = 0; i<= 3; i++ ){
    await PDPPage.Goto();
    await PDPPage.Addtocart();


    //await page.goto("https://dev-sfcc.uniformadvantage.com/hypothesis-s-r-shift-ready-men-s-4-pocket-v-neck-scrub-top/HC4582.html?dwvar_HC4582_color=NAVY&dwvar_HC4582_size=L");
    // await page.locator('.add-to-cart').click();
    // await page.locator('[class="product-number-label"]').last().waitFor({state:'visible'});
    
    // await page.locator('.add-to-cart-modal-action [href="https://dev-sfcc.uniformadvantage.com/cart/"]').last().click();

    // await page.locator(".line-item-style").first().waitFor({state:"visible"})

// Cart,Checkout and order confirmation page
    
    await checkout.Checkoutpage();
}
    
    // await page.locator(".checkout-btn").click()
    // await page.locator(".express-place-order").click()
    // await page.locator(".order-confirmation-title").waitFor({state:"visible"})



})