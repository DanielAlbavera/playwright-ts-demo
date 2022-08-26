import { Page, Locator } from '@playwright/test'
import { BasePage } from './base.page';

export class LoginPage extends BasePage {

    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly submitButton : Locator;
    readonly errorMessage : Locator;

    constructor(page:Page) {
        super(page);
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async visit() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

}