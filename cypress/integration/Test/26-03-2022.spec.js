// describe('handling alert',()=>{
//     it('tc01 for js alert',()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//         cy.get('button[onclick="jsAlert()"]').click()
//         cy.on('window:alert',str=>{
//             expect(str).to.equal('I am a JS Alert')
//         })
//         cy.get('#result').should('be.visible')
//     })
//     it('tc02 for js confirm',()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//         cy.get('button[onclick="jsConfirm()"]').click()
//         cy.on('window:confirm',str=>{
//             expect(str).to.equal('I am a JS Confirm')
//             return false
//         })
//         cy.get('#result').should('have.text','You clicked: Cancel')
//     })
//     it('tc03 for js confirm',()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//         cy.get('button[onclick="jsConfirm()"]').click()
//         cy.on('window:confirm',str=>{
//             expect(str).to.equal('I am a JS Confirm')
//             return true
//         })
//         cy.get('#result').should('have.text','You clicked: Ok')
//     })
// })





describe('verify functionality of web tables',()=>{
    it('verify sum of first team run',()=>{
        let sum=0
        cy.visit('https://sports.ndtv.com/cricket/pak-vs-aus-scorecard-live-cricket-score-australia-in-pakistan-3-test-series-2022-3rd-test-pkau03212022207652?utm_source=scorecard-lhs&utm_medium=cricket-recent&utm_campaign=desktop')
        cy.wait(70000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
        cy.get('#tbody_4_1').children().find('td:nth-child(4)').as('tbody') 
        cy.get('@tbody').each(function(el,index){
            cy.log(el.text())
            sum = sum + Number(el.text())
        }).then(()=>{
            expect(sum).to.equal(223)     
    })
    })
})