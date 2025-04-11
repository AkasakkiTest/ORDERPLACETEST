class Checkoutpage{
    constructor(page){
        
    this.page = page;
    this.checkoutbutton =  page.locator(".checkout-btn")
    this.placeorderbutton =  page.locator(".express-place-order")
    this.waitfororder = page.locator(".order-confirmation-title")

    }


    async Checkoutpage (){
        
        await this.checkoutbutton.click();
        await this.placeorderbutton.click();
        await this.waitfororder.waitFor({state:"visible"})
    }
}

module.exports = {Checkoutpage}