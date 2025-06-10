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


// PLP 
for (let i = 0; i<= 3; i++ ){
    await PDPPage.Goto();
    await PDPPage.Addtocart();
    
    await checkout.Checkoutpage();
}
    
    


})