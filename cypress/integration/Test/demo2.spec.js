const { expect } = require("chai")

describe('to validate dropdown',()=>{

    it.only('to validate dropdown',()=>{
      let countries = []
      cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
      cy.get('div[class="single_tab_div resp-tab-content resp-tab-content-active"]').children().last().find('select').children().as('countries')
      cy.get('@countries').each(function(el){
        countries.push(el.text())
          }).then(function(){
            cy.wrap(countries).should('have.length',249)
            cy.wrap(countries).should('contain',"India")
          })
      })
    })

    it('to validate countries',()=>{
        cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('div[class="single_tab_div resp-tab-content resp-tab-content-active"]').children().last().find('select').select('India')
        cy.get('img[alt="GlobalSQA"]').should('be.visible')
    })

    it('to validate countries',()=>{
      cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
      Cypress.on('uncaught:exception', (err, runnable) => {
          return false
      })
      cy.get('#menu-widgets').children().as('widgets')
      cy.get('@widgets').then(function(el,index){
        cy.log(el.text())
      })
  })

     it('to validate wrap command',()=>{
       cy.fixture('user.json').then(function(el){
         cy.log(el).should('has.property','firstName')
       })

     })

  

  describe('validate dropdown',()=>{
    it('validate dropdown',()=>{
      cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
      cy.get('div[style="display:block"]').children().last().find('select').select('India')
    })

    it('validate the txt',()=>{
      cy.visit('https://www.flipkart.com/')
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
      cy.get('input[type="text"]').type('samsung mobiles{enter}')
      //cy.get('button[type="submit"]').click()
      cy.get('div[class="_4rR01T"]').first().should('be.visible')
    })

    it('validate the amount',()=>{
      let sum = 12000
      cy.visit('https://www.flipkart.com/search?q=samsung%20mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
      cy.get('div[class="_25b18c"]').first().as('amount')
      cy.get('@amount').then(parseFloat).then((el)=>{
        cy.log(el)
        if(el==sum){
          sum = Number(el.children().text())
        }
      }).then(()=>{
        expect(11,499).to.be.lessThan(sum)
        expect(sum).to.be.greaterThan(11,499)
      })
    })
  })
  