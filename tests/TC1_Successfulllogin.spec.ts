import { test,expect } from "@playwright/test";
import { Login } from "../pages/Login";
import { before } from "node:test";
import { beforeEach } from "node:test";

let login:Login

test.beforeEach('Loginurl',async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})

test('Login',async({page})=>{

login=new Login(page)


await login.enter_username("Admin")
await login.enter_password("admin123")
await login.click_loginbutton()

})



test.afterEach('closescreen',async({page})=>


page.close()

)