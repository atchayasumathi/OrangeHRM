import { test,expect } from "@playwright/test";
import { Login } from "../pages/Login";
import {dataprovider} from  "../utils/Dataprovided"






test.beforeEach('Loginurl',async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})


// test('Login',async({page})=>{
// let login:Login

// const Logindata=dataprovider.Json_data('data/data.json')
// login=new Login(page)


// await login.enter_username(Logindata.email)
// await login.enter_password(Logindata.password)
// await login.click_loginbutton()

// })

let login:Login

const Logindata=dataprovider.Json_data('data/data1.json')
for(const {email,password} of Logindata)
test(`Login test for ${email} and ${password}`,async({page})=>{
login=new Login(page)

await login.enter_username(email)
await login.enter_password(password)
await login.click_loginbutton()
await page.waitForTimeout(2000)


    

}
)