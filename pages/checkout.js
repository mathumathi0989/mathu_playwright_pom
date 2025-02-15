exports.checkoutPage = class checkoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.getByRole('textbox', { name: 'First Name*' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name*' });
        this.address = page.getByRole('textbox', { name: 'Address 1*' });
        this.city = page.getByRole('textbox', { name: 'City*' });
        this.pin = page.getByRole('textbox', { name: 'Post Code*' });
        this.country = page.locator('#input-payment-country');
        this.state = page.locator('#input-payment-zone');
        this.checkBox = page.getByText('I have read and agree to the Terms & Conditions');
        this.continueBtn = page.getByRole('button', { name: 'Continue ' });
        this.checkoutProdName = page.locator('#content').getByRole('cell', { name: 'iPod Touch' });
        this.checkoutTotalPrice = page.locator('#content').getByRole('cell', { name: '$165.00' });
        this.confirmOrder = page.getByRole('button', { name: 'Confirm Order ' });
        this.confirmMessage = page.getByRole('heading', { name: ' Your order has been placed!' });
        this.checkoutContinueBtn = page.getByRole('link', { name: 'Continue' });
    }

    async getCheckoutDetails() {
        await this.checkBox.check();
        await this.continueBtn.click();
        await this.confirmOrder.click();
        console.log(await this.confirmMessage.textContent());
        await this.checkoutContinueBtn.click();
    }

}