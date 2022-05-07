

export const login_selector = {
      userName:"#txtUsername",
      passWord:"#txtPassword",
      loginbtn:"#btnLogin",
      forgotPass:"#forgotPasswordLink a",
      homePage:"#divLogo"

}


export class Login {
        
    static verifyLoginVisible(){
        cy.visit('/')
        cy.get(login_selector.homePage).should('be.visible')
    }

     static verifyForgotLink(){
         cy.get(login_selector.forgotPass).should('be.visible')
     }

     static verifyLogin(){
         cy.get(login_selector.userName).type('Admin')
         cy.get(login_selector.passWord).type('admin123')
         cy.get(login_selector.loginbtn).click()
     }
}