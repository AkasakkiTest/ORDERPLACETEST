class Checkoutpage{
    constructor(page){
       //* Initializing the page object with the page instance */ 
    this.page = page;
    this.checkoutbutton =  page.locator(".checkout-btn")
    this.placeorderbutton =  page.locator(".express-place-order")
    this.waitfororder = page.locator(".order-confirmation-title")

    }


    async Checkoutpage (){
        
        /* TEst case to verify checkout page */
        await this.checkoutbutton.click();
        await this.placeorderbutton.click();
        await this.waitfororder.waitFor({state:"visible"})
        await this.page.waitForLoadState("networkidle");
    }

    

}

module.exports = {Checkoutpage}