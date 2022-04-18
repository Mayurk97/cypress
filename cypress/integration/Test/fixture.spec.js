describe('verify sign up with the helpnof fixture',function(){
    before(()=>{
        cy.fixture("users").then((data)=>{
            this.data = data
        })
    })
    it('verify functionality for sign up with fixure',()=>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data.firstName)
        cy.get('input[name="last_name"]').type(this.data.lastName)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('textarea[name="message"]').type(this.data.comments)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
    it('verify functionality for sign up with fixure 2',()=>{
        cy.fixture("users").then(function(data){
            cy.log(data)
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data.firstName)
        cy.get('input[name="last_name"]').type(data.lastName)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.comments)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
        })
        
    })
    it('verify functionality for sign up with fixure 2',()=>{
        cy.fixture("users").then(function(data){
            cy.log(data)
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data.firstName)
        cy.get('input[name="last_name"]').type(data.lastName)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.comments)
        cy.get('input[type="reset"]').click()
        cy.get('input[name="email"]').should('have.text','')
        })
        
    })
    it('verify functionality for sign up with fixure 2',()=>{
        cy.fixture("users").then(function(data){
            cy.log(data)
            data.email="mayur@gmail"
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data.firstName)
        cy.get('input[name="last_name"]').type(data.lastName)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.comments)
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain','Error: Invalid email address')
        })
    })   
})