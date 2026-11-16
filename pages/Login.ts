import { Page,Locator } from "@playwright/test";

export class Login{
 

    private readonly username:Locator
    private password:Locator
    private Loginbutton:Locator
    private readonly forgetpassword_button:Locator


constructor(page:Page){


    this.username=page.getByRole("textbox",{name:"username"})
    this.password=page.getByPlaceholder("Password")
    this.Loginbutton=page.getByRole("button",{name:'Login'})
    this.forgetpassword_button=page.getByRole("link",{name:'Forgot your password? '})

}

//Actions

async enter_username(username:string){

   await this.username.fill(username)
}


async enter_password(password:string){

   await this.password.fill(password)
}

async click_loginbutton(){

   await this.Loginbutton.click()

}

async click_forgetpassword(){

await this.forgetpassword_button.click()

}
}

