import { Page,Locator,expect } from "@playwright/test";


export class Add_Admin{

private readonly user_role
private readonly Employee_name
private readonly status
private readonly user_name
private readonly password
private readonly aconfirm_password
private readonly save_button


constructor(page:Page){

this.user_role=page.locator(".oxd-select-wrapper")
this.Employee_name=page.getByPlaceholder("Type for hints...")
this.status=page.locator("div.oxd-select-wrapper").nth(1)
this.user_name=page.locator("input[@fdprocessedid='j2hpoo']")
this.password=page.getByRole("textbox",{name:"password"})
this.aconfirm_password=page.getByRole("textbox",{name:"Confirm Password"})
this.save_button=page.getByRole("button",{name:"Save"})

}

async select_userrole(){


    this.user_role.selectOption({value:"ESS"})

}

async enter_employeeName(){


    this.Employee_name.fill("Atchaya Mohan")

}

async select_status(){


    this.status.selectOption({value:"Enabled"})
}

async enter_username(){
 this.user_name.fill("Atchaya1")
}

async enter_password(){
    this.password.fill("Password1")
}
async confirm_password(){
    

    this.aconfirm_password.fill("Password1")
}

async click_save(){

this.save_button.click()

}

}