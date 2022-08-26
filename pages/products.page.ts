import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";


export class ProductsPage extends BasePage {

    readonly productsLabel: Locator;

    constructor(page:Page) {
        super(page);
        this.productsLabel = page.locator('text=Products');
    }

    async isProductsLabelDisplayed() {
        return await this.productsLabel.isEnabled();
    }

}