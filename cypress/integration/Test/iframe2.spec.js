

describe('Validate the iframe',()=>{
    it('verify iframe using Jqueryt',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe[id="mce_0_ifr"]').then((el)=>{
            cy.wrap(el.contents().find('body')).as('frame')
            cy.get('@frame').should('have.text','Your content goes here.')
            cy.get('@frame').find('p').clear()
            cy.get('@frame').find('p').type('i am mayur')
        })
      })
      it('verify iframe using Javascript',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe[id="mce_0_ifr"]').then((el)=>{
            cy.wrap(el[0].contentDocument.body).as('frame')
            cy.get('@frame').should('have.text','Your content goes here.')
            cy.get('@frame').find('p').clear()
            cy.get('@frame').find('p').type('i am mayur')
        })

    })

    it('validate the ifarme using jquery',()=>{
        cy.visit('https://demoqa.com/frames')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('iframe[id="frame1"]').then((el)=>{
            cy.wrap(el.contents().find('body')).as('framebody')
            cy.get('@framebody').should('have.text','This is a sample page')
        })
    })

    it('validate the ifarme using javascript',()=>{
        cy.visit('https://demoqa.com/frames')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('iframe[id="frame1"]').then((el)=>{
            cy.wrap(el[0].contentDocument.body).as('framebody')
            cy.get('@framebody').should('have.text','This is a sample page')
        })
    })
    it.only('validate iframe',()=>{
        cy.visit('https://demo.automationtesting.in/Frames.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('#singleframe').then((el)=>{
            cy.wrap(el.contents().find('body')).as('frame')
            cy.get('@frame').find('input').type('i am mayur')
        })
    })
      
})