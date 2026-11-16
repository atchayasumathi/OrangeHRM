import { Page,Locator,expect } from "@playwright/test";

export class Homepage{

private readonly Add:Locator
private readonly admin_page:Locator
private readonly admintab:Locator


constructor(page:Page){

this.Add=page.locator(".oxd-button").nth(2)
this.admin_page=page.locator("span.oxd-topbar-header-breadcrumb")
 this.admintab= page.locator("li.oxd-main-menu-item-wrapper").nth(0)

}

async clickon_Admintab(){

await this.admintab.click()


}
async verifyadminpage_title(){

    
await expect (this.admin_page).toHaveText("AdminUser Management")


}

async click_Addbutton(){

    await this.Add.click()
}

}