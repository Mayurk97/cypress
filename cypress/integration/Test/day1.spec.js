
describe('verify traverse method',()=>{

    it('to get a DOM element at a specific index,use .eq() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('#brandcarousal').children().as('brandElement')
        cy.get('@brandElement').should('have.length',10)
        cy.get('@brandElement').eq(0).should('be.visible')
        cy.get('@brandElement').eq(0).children().should('have.length',2)
        
    })
    it('to get a first DOM element within element , use .first() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().as('navElement')
        cy.get('@navElement').should('have.length',8)
        cy.get('@navElement').first().should('contain','Home')
    })
    it('to get a last DOM element within element , use .last() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().as('navElement')
        cy.get('@navElement').last().should('contain','Books')
    }) 
    it('to get a next  DOM element within element , use .next() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[class="active menu_home"]').parent().next().should('contain','Apparel & accessories')
        
    }) 
    it('to get a prev  DOM element within element , use .prev() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').parent().prev().should('contain','Makeup')
        
    })
    it('to get a DOM element that matches a specific selector , use .filter() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().find('a').filter('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').should('contain','Apparel & accessories')
        
    })
    it('to get all siblings of DOM element  , use .siblings() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').parent().siblings().should('have.length',7)
        
    })
    it('to get descendant DOM element of selector , use .find() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('#main_menu_top').find('a').should('have.length',6)
        
    })
    it('to get parents DOM element of element , use .parents() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[class="active menu_home"]').parents().should('match','ul')
    })
    it('to remove DOM element of from set of element , use .not() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('ul[class="info_links_footer"]').find('a').not('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=1"]').should('have.length',6)
    })
    it('to get all of the next sibling DOM element within elements until another element , use .nextUntil() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').first().nextUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(4)').should('have.length',2)
    })
    it.only('to get all of the prev sibling DOM element within elements until another element , use .prevUntil() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.promo_block').last().prevUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(1)').should('have.length',2)
    })
})