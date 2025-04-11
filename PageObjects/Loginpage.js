class LoginPage{

    constructor(page){
        this.page = page;
        this.emailid = page.locator("#login-form-email")
        this.password = page.locator("#login-form-password")
        this.loginbutton = page.locator(".login-columns button")


        
    }

async Goto(){
    await this.page.goto("https://storefront:uachef@bgps-012.dx.commercecloud.salesforce.com/s/UA/en_US/login/");
    await this.page.locator("#login-form-email").waitFor({state:"visible"})
}

async validlogin (email,password){

    await this.emailid.fill(email);
    await this.password.fill(password);
    await this.loginbutton.click();
    await this.page.locator(".card-title").first().waitFor({state:"visible"});
}

}

module.exports = {LoginPage}