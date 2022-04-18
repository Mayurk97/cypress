import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("Check login validity on the Automation Site", () => {
    cy.visit('http://practice.automationtesting.in/my-account/')
})

And('User log-in using {word}', (username) => {
    cy.get('#username').type(username)

})

And('User log-in using password {word}', (password) => {
    cy.get('#password').type(password)
})

When('click on submit button', () => {
    cy.get('input[name="login"]').click()
})

Then('Dashbord test should be visible', () => {
    cy.get('.is-active> a').should('have.text', 'Dashboard')
})