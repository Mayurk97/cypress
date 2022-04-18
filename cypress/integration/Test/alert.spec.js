

describe('verify js alert',()=>{
    it('verify js window alert',()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box!')
        })
    })
    it('verify js window alert',()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((win)=>{
            cy.stub(win,'alert').as('alert')
        })
        cy.get('#button1').click()
        cy.get('@alert').should('have.been.calledOnceWith','I am an alert box!')
    })
    it('verify js window alert',()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function(el){
            cy.stub(el,'confirm').returns(true)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text','You pressed OK!')
    })
    it('verify js window alert',()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function(el){
            cy.stub(el,'confirm').returns(false)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')
    })
    it('verify js window alert',()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function(el){
            cy.stub(el,'prompt').returns("I am an alert box")
        })
        cy.contains(/^click for JS Prompt/).click()
        cy.get('#result').should('contain','I am an alert box')
    })
})