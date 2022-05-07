
import{data}from "/Users/user/Desktop/cypress/cypress/fixtures/users.json"

describe('verify the fixture topic in js', function () {
    data.forEach(function(el){
    it('verify the fixture', function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.log(el)
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[value ="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
    })
    })

})