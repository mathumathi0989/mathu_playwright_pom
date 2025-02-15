exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.myaccountMenu = page.getByRole('button', { name: ' My account' });
        this.loginMenu = page.getByRole('link', { name: 'Login' });
        this.usernameInput =  page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }
    
    async gotoLoginPage(){
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php');
    }

  
    async login(username, password) {
        await this.myaccountMenu.hover();
        await this.loginMenu.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    
}