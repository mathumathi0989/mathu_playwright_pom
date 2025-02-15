exports.ProductDetailPage = class ProductDetailPage {
    constructor(page) {
        this.page = page;
         this.prodNameO = page.getByRole('heading', { name: 'iPod Touch' });
        this.prodPrice = page.getByRole('heading', { name: '$' });
        this.prodSize = page.locator('#input-option231-216836');
        this.addCart = page.getByRole('button', { name: 'Add to Cart' });
        this.successMessage = page.getByText('Success: You have added iPod');
        this.viewCart = page.getByRole('button', { name: '1' });
        this.checkOutCart = page.getByRole('button', { name: ' Checkout' });
    }

    async getProductDetails() {
        console.log(await this.prodNameO.textContent());
        console.log(await this.prodPrice.textContent());
        await this.addCart.click();
        console.log(await this.successMessage.textContent());
        await this.viewCart.click();
        await this.checkOutCart.click();

    }
}


