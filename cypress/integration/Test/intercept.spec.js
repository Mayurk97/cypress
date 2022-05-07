describe('intercept',()=>{
    it('validate API response with upi',()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1').as('getcomment')
        cy.get('button.network-btn').click()
        cy.wait('@getcomment').then(Response=>{
            cy.log(Response)
        cy.log(Response.response.body.body)
        let getBtnText = Response.response.body.body
        cy.get('div.network-comment').should('have.text',getBtnText)
        })
    })
})





