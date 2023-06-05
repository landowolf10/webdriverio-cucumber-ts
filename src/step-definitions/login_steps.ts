import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';

When("entering email {string} and password {string}", async (username, password) => {
    await LoginPage.login(username, password)
});

