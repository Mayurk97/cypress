
    describe('verify traverse method',()=>{
       it('to get a DOM element at a specific index,use .eq() command',()=>{
           cy.visit('https://paytm.com/')
           cy.get('#topNavData').children().eq(0).should('have.text','Paytm for Consumer')
           cy.get('#topNavData').children().eq(1).should('have.text','Paytm For Business')
       })
       it('to get a first DOM element within element , use .first() command',()=>{
           cy.visit('https://paytm.com/')
           cy.get('#topNavData').children().as('topnavElement')
           cy.get('@topnavElement').first().should('have.text','Paytm for Consumer')

       })
       it('to get a last DOM element within element , use .last() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('#topNavData').children().as('topnavElement')
        cy.get('@topnavElement').last().should('have.text','Career')

    })
       it('to get a next  DOM element within element , use .next() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('[class="_3AUXm"]').children().first().should('contain','Software')
        cy.get('[class="_3AUXm"]').children().first().next().should('contain','Business App')
        
    })
    it('to get a prev DOM element within element , use .prev() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('#topNavData').children().as('topnavElement')
        cy.get('@topnavElement').last().prev().should('have.text','Investor Relations')
  })
    it('to get parents of DOM element within element , use .parents() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('img[src="https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png"]').parents().should('match','section')

    })
    it('to get descendant DOM element of selector , use .find() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('section[style="background:#00baf2"]').find('img').should('have.length',7)
 })
    it('to get all siblings of DOM element  , use .siblings() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('img[src="https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png"]').parent().siblings().should('have.length',6)
    
    })
    it('to remove DOM element of from set of element , use .not() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('section[style="background:#00baf2"]').find('img').not('img[src="https://assetscdn1.paytm.com/images/catalog/view_item/733300/1626778824903.png"]').should('have.length',6)
        
    })
    it('to get all of the next sibling DOM element within elements until another element , use .nextUntil() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('#topNavData').children().as('topnavElement')
        cy.get('@topnavElement').first().nextUntil('#topNavData > li:nth-child(5)').should('have.length',3)
    })
    it('to get all of the prev sibling DOM element within elements until another element , use .prevUntil() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('#topNavData').children().as('topnavElement')
        cy.get('@topnavElement').last().prevUntil('#topNavData > li:nth-child(1)').should('have.length',3)
    })
    it('to get a parent of DOM element within element,use .parent() command',()=>{
        cy.visit('https://paytm.com/')
        cy.get('.GkeQS').parent().should('have.class','nWhEP')

    })

  })