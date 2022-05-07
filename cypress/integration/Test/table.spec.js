describe('Verify functionality for table',()=>{

    it('verify functionality for login',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')

    })
    it('verify functionality for login',()=>{
        cy.login('Admin','admin123')

    })

    it('verify functionality for table',()=>{
        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').as("tableRow")       
        cy.get('@tableRow').should('have.length',4)
        cy.get('@tableRow').each(function(el,index){
             if(index != 0){
                sum =  sum + Number(el.children().last().text())
             }
        }).then(()=>{
    
             expect(sum).to.equal(159)
    
        })

        it('verify the sum of values of table',()=>{

            cy.validateTable(1,159)
            cy.validateTable(2,163)
       })

    })
})