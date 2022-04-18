
var Cookie =['protein','vegetable']
describe('verify applitool cookies',()=>{
    beforeEach(()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/cookie')
    })
    it('get all cookies',()=>{
        cy.getCookies().then(cookies=>{
            cy.log(cookies)
        })
    })
    it('get all cookies',()=>{
        cy.getCookies().should('have.length',2)
        cy.getCookies().then(cookies=>{
            expect(cookies[0]).to.have.property('name','protein')
            expect(cookies[1]).to.have.property('name','vegetable')
        })
    })
    it('get all cookies and compare with expected result',()=>{
        cy.getCookies().should('have.length',2)
        cy.getCookies().each((currentCookie,index)=>{
            expect(currentCookie).to.have.property('name',Cookie[index])
        })
        
    })
    it('delete/clear cookies',()=>{
        cy.clearCookies()
        cy.getCookies().should('be.empty')
        
        
    })
    it('modify cookies value',()=>{
        cy.clearCookies('vegetables').then(()=>{
        cy.setCookie('vegetable','potato').should('have.property','value','potato')
        })
   })
   it('set new cookies',()=>{
    cy.setCookie('fruit','Mango').should('have.property','value','Mango')
    })
})