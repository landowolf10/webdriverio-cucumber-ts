import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';

Given("app is open", async () => {
    await LoginPage.homeButtonDisplayed();
});