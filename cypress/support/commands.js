// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('login', (username, password) => {

//     cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
//         cy.get('#txtUsername').type(username)
//         cy.get('#txtPassword').type(password)
//         cy.get('#btnLogin').click()
//         cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')



//  })

//  Cypress.Commands.add('validateTable', (id, value) => {


//     let sum = 0
//     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//     cy.get(`#t0${id}`).find('tr').as("tableRow")       
//     cy.get('@tableRow').should('have.length',4)
//     cy.get('@tableRow').each(function(el,index){
//          if(index != 0){
//             sum =  sum + Number(el.children().last().text())
//          }
//     }).then(()=>{

//          expect(sum).to.equal(value)

//     })
    
// })


Cypress.Commands.add('firstteam',(val1)=>{
     let sum=0
     cy.visit('https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-1216494/full-scorecard')
     cy.get('table[class="table batsman"]').first().find('tr td:nth-child(3)').as('tablebatsman')
     cy.get('@tablebatsman').each(function(el,index){
            if(index!=10){
              cy.log(el.text())
              sum = sum + Number(el.text())
  
            }
  
     }).then(()=>{
  
       expect(sum).to.equal(val1)
     })
})

Cypress.Commands.add('secondteam',(val2)=>{
     let summ=0
     cy.visit('https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-1216494/full-scorecard')
     cy.get('table[class="table batsman"]').last().find('tr td:nth-child(3)').as('tablebatsman')
     cy.get('@tablebatsman').each(function(el,index){
            if(index!=5){
              cy.log(el.text())
              summ = summ + Number(el.text())
  
            }
  
     }).then(()=>{
  
       expect(summ).to.equal(val2)
     })
})