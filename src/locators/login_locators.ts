export class LoginLocators {
    public get homeOption () {
        return $("//*[@text='Home' or @label='Home']");
    }

    public get loginOption () {
        return $("//*[@text='Login' or @label='Login']");
    }

    public get inputUsername () {
        return $("//*[@text='Email' or @label='Email']");
    }

    public get inputPassword () {
        return $("//*[@text='Password' or @label='Password']");
    }

    public get btnSubmit () {
        return $("//*[@text='LOGIN' or @label='LOGIN']");
    }
}