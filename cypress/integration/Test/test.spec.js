

var arr=['ipad-2','ipad-mini','macbook','samsung-note9']
describe('learn screenshot',()=>{
    beforeEach(()=>{
        cy.visit('https://www.amazon.in/')
        cy.wait(40000)
    })
    it('test case 1',()=>{
        cy.screenshot('amazon')
    })
    it('test case 2 cliping',()=>{
        cy.screenshot({clip:{x:20,y:20,width:400,height:300}})
    })
    it('test case 3 for perticular element',()=>{
        cy.get('a[aria-label="Amazon"]').screenshot('element')

    })
})

describe('learn viewport',()=>{
    it('test case with preset',()=>{
        cy.viewport('iphone-8')
        cy.visit('https://www.amazon.in/ref=nav_logo')
    })
    it('test case with preset',()=>{
        cy.viewport('macbook-16')
        cy.visit('https://www.amazon.in/ref=nav_logo')
    })
    it.only('test case with preset',()=>{
        cy.viewport('samsung-note9')
        cy.visit('https://www.amazon.in/ref=nav_logo')
    })

})

