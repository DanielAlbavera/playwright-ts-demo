import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { credentials } from '../constants/data';

test.describe('Login Functionality', () => {

    let loginPage : LoginPage ;
    let productsPage : ProductsPage;

    test.beforeEach( async ({page}) => {
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        await loginPage.visit();
    });
    
    test('Valid Login', async () => {
        await loginPage.login(credentials.valid.USERNAME, credentials.valid.PASSWORD);
        expect(await productsPage.isProductsLabelDisplayed()).toBe(true);
    });

    test('Invalid Login', async () => {
        await loginPage.login(credentials.invalid.USERNAME, credentials.invalid.PASSWORD);
        expect(await loginPage.errorMessage.isEnabled()).toBe(true);
    });


});