
describe('transverse method in javascript',()=>{
    it('To get a DOM element at a specific index,use the .eq() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('td').should('have.length',24)
        cy.get('td').eq(0).should('have.text','John')
    })
    it('To get a first DOM element within element ,use the .first() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('td').first().should('have.text','John')
        
    })
    it('To get a last DOM element within element ,use the .last() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('td').last().should('have.text','Scott')
    })   
    it('To get a children of DOM element  ,use the .children() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="list-group"]').children().should('have.length',2)
    })
    it('To get a next sibling of DOM element within element  ,use the .next() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').next().should('have.text','Apple')
     
    })
    it('To get a previous sibling of DOM element within element  ,use the .prev() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text','Figs')
     
    })
    it('To get all of the next  sibling of DOM element within element  ,use the .nextAll() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length',4)
     
    })
    it('To get all of the previous  sibling of DOM element within element  ,use the .prevAll() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevAll().should('have.length',4)
     
    })
    it('To get a DOM element that match a specific selector  ,use the .filter() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().filter('.active').should('have.text','Contact Us')
     
    })
    it.only('To get all the sibling of DOM element   ,use the .siblings() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').siblings().should('have.length',10)
    })
 })









