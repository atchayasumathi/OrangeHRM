import { Page,expect,test } from "@playwright/test";
import { Login } from "../pages/Login";
import { Homepage} from "../pages/Homepage";
import {Add_Admin} from "../pages/Admin"


let login:Login
let homepage:Homepage
let Admin:Add_Admin
test.beforeEach('Loginurl',async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})


test('Login',async({page})=>{


    //login
    login=new Login(page);


     await login.enter_username("Admin");
     await login.enter_password("admin123")
     await login.click_loginbutton()
     await page.waitForTimeout(2000)
   //verify the title
     homepage=new Homepage(page)
    await homepage.clickon_Admintab()
    await homepage.verifyadminpage_title()
    await homepage.click_Addbutton()
 await page.waitForTimeout(2000)

 Admin=new Add_Admin(page)

 await Admin.select_userrole()
 await Admin.enter_employeeName()
 await Admin.select_status()
 await Admin.enter_username()
 await Admin.enter_password()
 await Admin.confirm_password()

 
})

