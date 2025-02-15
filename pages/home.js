exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.search = page.getByRole('textbox', { name: 'Search For Products' });
        this.searchClick = page.getByRole('button', { name: 'Search' });
        this.searchedProductClick = page.locator("//*[@id='entry_212469']/div/div[2]//h4");
    
        this.homeMenu = page.getByRole('link', { name: 'Home' });
        this.product = page.getByLabel('2 / 24', { exact: true }).getByRole('link', { name: 'Apple Cinema 30"', exact: true });
    }

    async getProduct() {
        await this.search.fill('iPod Touch');
        await this.searchClick.click();
        await this.searchedProductClick.click();

    }
}
