

describe('commands',()=>{
    it('cy.document',()=>{
        cy.visit('http://practice.automationtesting.in/')
        cy.wait(70000)
        cy.document().then(doc=>{
            expect(doc.title).to.eq('Automation Practice Site')
        })
    })
    it.only('cy.window',()=>{
        cy.visit('http://practice.automationtesting.in/') 
        cy.window().then(win=>{
            cy.log(win.loctaion)
            expect(win.location.href).to.eq('http://practice.automationtesting.in/')
            let newUrl="https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg"
            win.location.href=newUrl
            cy.url().should('eq',"https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg")
        }) 
    })
})