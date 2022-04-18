// describe('verify the dropdown',()=>{
//     it('verify the dropdown and select the product',()=>{
//         cy.visit('https://www.patanjaliayurved.net/')
//         cy.get('a[data-toggle="dropdown"]').last().trigger('mouseover')
//         cy.get('ul[class="list-unstyled"]').children().eq(2).should('contain','Ayurvedic Medicine').as('ayurvedic')
//         cy.get('@ayurvedic').click()
//         cy.get('a[href="https://www.patanjaliayurved.net/product/ayurvedic-medicine/parpati-ras/swet-parpati/187"]').first().click()
//         Cypress.on('uncaught:exception', (err, runnable) => {
//             return false
//         })
//         cy.get('button[class="shoping addtocart btn"]').click().then(()=>{
//             cy.get('div[id="PopUpMessage"]').find('p').should('contain','Your request is being processed..')
//         })

//     })
// })

describe('verify the railway ticket',()=>{
    it('check the availability of train',()=>{
        cy.visit('https://www.irctc.co.in/nget/train-search')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get(('input[aria-autocomplete="list"]')).first().type('pune')
        cy.contains('PUNE JN - PUNE').click()
        cy.get(('input[aria-autocomplete="list"]')).last().type('delhi')
        cy.contains('DELHI - DLI').click()
        cy.get('div[class="ng-tns-c66-12 ui-dropdown ui-widget ui-state-default ui-corner-all"]').click().contains('TATKAL').click()
        cy.get('span[class="ng-tns-c59-10 ui-calendar"]').click()
        cy.get('a[draggable="false"]').eq(1).click()
        cy.get('div[class="ng-tns-c66-11 ui-dropdown ui-widget ui-state-default ui-corner-all"]').click().contains('AC First Class (1A) ').click()
        cy.get('label[class="css-label_c t_c"]').eq(2).click().then(()=>{
            cy.get('button[type="submit"]').click()
            cy.get('button[class="active btnDefault ng-star-inserted"]').should('be.visible')
        })

    })
})