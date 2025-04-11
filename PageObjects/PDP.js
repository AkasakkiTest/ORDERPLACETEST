class PDP{

    constructor(page){
        
    this.page = page;
    this.addtocart = page.locator('.add-to-cart')
    this.waitfor = page.locator('[class="product-number-label"]')
    this.proceedtocart = page.locator('.add-to-cart-modal-action [href="https://bgps-012.dx.commercecloud.salesforce.com/s/UA/en_US/cart/"]')
    this.waitforcart=  page.locator(".line-item-style")

    }
async Goto(){

    await this.page.goto("https://storefront:uachef@bgps-012.dx.commercecloud.salesforce.com/s/UA/en_US/easy-stretch-sierra-women-s-oversized-2-pocket-v-neck-scrub-top/BU4237.html?dwvar_BU4237_color=ROYAL&dwvar_BU4237_size=S");
}

async Addtocart (){
     await this.addtocart.click();
     await this.waitfor.last().waitFor({state:'visible'});
     await this.proceedtocart.last().click();
     await this.waitforcart.first().waitFor({state:"visible"})
 
}
}
module.exports = {PDP}