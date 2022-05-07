import {dash,Dashboard} from "../../support/pom/dasboard"
import{Login,login_selector}from "../../support/pom/login"

describe('verify login functionality',()=>{

    it('verify logo',()=>{
       Login.verifyLoginVisible()
    })

    it('verify forgotlink',()=>{
        Login.verifyForgotLink()
    })

    it('verify login',()=>{
        Login.verifyLogin()
    })

    it('verify dasboard',()=>{
        dash.verifydash()
    })
})