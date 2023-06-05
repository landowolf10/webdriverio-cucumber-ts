import { LoginLocators } from "../locators/login_locators";

let loginLocators: LoginLocators = new LoginLocators;

class LoginPage {
    public async homeButtonDisplayed () {
        await loginLocators.homeOption.isExisting();
    }

    public async login (username: string, password: string) {
        await loginLocators.loginOption.click();
        await loginLocators.inputUsername.setValue(username);
        await loginLocators.inputPassword.setValue(password);
        await loginLocators.btnSubmit.click();
    }
}

export default new LoginPage();