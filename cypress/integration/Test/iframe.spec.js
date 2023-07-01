 
 describe('verify the function of iframe',()=>{
     it.skip('verify iframe using Jquery',()=>{
       cy.visit('https://the-internet.herokuapp.com/iframe')
       cy.get('iframe[title="Rich Text Area"]').then((el)=>{
           cy.wrap(el.contents().find('body')).as('iframetitle')
           cy.get('@iframetitle').should('have.text','Your content goes here.')
           cy.get('@iframetitle').find('p').clear()
           cy.get('@iframetitle').find('p').type('I am learning cypress')
           
       })
       
     })
     it.skip('verify iframe using Javascript',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe[title="Rich Text Area"]').then((el)=>{
            cy.wrap((el[0].contentDocument.body)).as('iframetitle')
            cy.get('@iframetitle').should('have.text','Your content goes here.')
            cy.get('@iframetitle').find('p').clear()
            cy.get('@iframetitle').find('p').type('I am learning cypress')
        })
        
      })
})
      it.skip('verify iframe using Jquery',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el)=>{
            cy.wrap(el.contents().find('body')).as('framebody')
            cy.get('@framebody').find('ul').children().eq(1).should('have.text','Our Products')

      })
      
        
      })
    

    

 
