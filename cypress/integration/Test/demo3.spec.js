
 Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
 describe('validate the text',()=>{
    it.skip('to check the mobiles',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('input[type="text"]').type('iphone ')
        cy.wait(3000)
        cy.get('form[class="_2M8cLY header-form-search"]').children().last().children().as('text')
        cy.get('@text').each(function(el){
            cy.log(el.text())
            
        }).then((el)=>{
            cy.wrap(el).contains('iphone 7').click({force: true})
            cy.contains('APPLE iPhone 7 (Gold, 32 GB)').should('be.visible')
        })
    })

    it.skip('to validate the checkbox',()=>{
        cy.visit('https://jqueryui.com/checkboxradio/')
        cy.get('iframe[class="demo-frame"]').then((el)=>{
            cy.wrap(el.contents().find('body')).as('framebody')
            cy.get('@framebody').find('fieldset').eq(1).children().eq(7).as('checkbox')
            cy.get('@checkbox').click()
        })
    })

    it.skip('validate dropdown',()=>{
        cy.visit('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=58075519359&hvpone=&hvptwo=&hvadid=486462756371&hvpos=&hvnetw=g&hvrand=5240806497625778070&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062113&hvtargid=kwd-64107830&hydadcr=14452_2154371&gclid=EAIaIQobChMI0Z-yqoWg-gIV2NxMAh1FJgFEEAAYASAAEgJt1fD_BwE')
        cy.get('#twotabsearchtextbox').type('iphone ')
        cy.get('div[class="autocomplete-results-container"]').children().as('text')
        cy.get('@text').each((el)=>{
            cy.log(el.text())
        }).then((el)=>{
            cy.wrap(el)
            cy.contains('iphone 14').click()
            cy.get('a[data-elementid="sbx-headline"]').should('be.visible')
        })
    })

    it('validate the country',()=>{
        cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
        cy.get('div[rel-title="Select Country"]').children().last().find('select').children().as('countries')
        cy.get('@countries').each(function(el){
            cy.log(el.text())
        }).then((el)=>{
            cy.wrap(el).should('have.length',249)
            cy.wrap(el).should('contain','India')

        })
    })

    it('validate the country',()=>{
        cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
        cy.get('div[style="display:block"]').children().last().find('select').select('India')
    })
})