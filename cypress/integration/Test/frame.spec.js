
describe('frame',()=>{
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
    })
    it('verify iframe using jquery',()=>{
         cy.get('#frame').then((el)=>{
          cy.wrap(el.contents().find('body')).as('framebody')
          cy.get('@framebody').find('ul').children().first().should('have.text','Home')
        })
      })
      it('verify iframe using Javascript',()=>{
        cy.get('#frame').then((el)=>{
            cy.wrap(el[0].contentDocument.body).as('framebody')
            cy.get('@framebody').find('ul').children().eq(1).should('have.text','Our Products')

      })
    })
})


describe.only('validate iframe',()=>{
    it.skip('validate frame',()=>{
        cy.visit('https://nxtgenaiacademy.com/iframe/')
        cy.get('iframe[name="iframe_a"]').then((el)=>{
            cy.wrap(el.contents().find('body')).as('frame')
            cy.get('@frame').find('h2').should('have.text','Employer Details')
        })
    })

    it.skip('tc 1',()=>{
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('iframe[name="globalSqa"]').then((el)=>{
            cy.wrap(el.contents().find('body')).as('frame')
            cy.get('@frame').find('ul[id="filter_list"]').children().as('options')
            cy.get('@options').each((el)=>{
                cy.log(el.text())
            }).then((el)=>{
                cy.wrap(el).should('contain','Automation')
                cy.wrap(el).contains('Automation').click({force: true})
            })
        })
    })

    it('tc 01',()=>{
        cy.visit('https://demo.automationtesting.in/Frames.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('iframe[id="singleframe"]').then((el)=>{
            cy.wrap(el.contents().find('body')).as('frame')
            cy.get('@frame').find('h5').should('have.text','iFrame Demo')
            cy.get('@frame').find('input').type('i am mayur')
        })
    })

    it('using javascript',()=>{
        cy.visit('https://demo.automationtesting.in/Frames.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('iframe[id="singleframe"]').then((el)=>{
            cy.wrap(el[0].contentDocument.body).as('frame')
            cy.get('@frame').find('h5').should('have.text','iFrame Demo')
            cy.get('@frame').find('input').type('i am mayur')
        })
    })
})