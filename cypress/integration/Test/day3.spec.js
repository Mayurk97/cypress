


describe('verfiy checkbox,radio,dropDown,enabled and disabled',()=>{
    it('verify the dropdown functionality',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('java').should('have.value','java')
        cy.get('#dropdowm-menu-1').select('JAVA').should('contain','JAVA')

    })
    it('verify multiple selection of dropdown',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        let selectValues = ["java","junit","javascript"]
        cy.get('.section-title').first().children('select').each(function(el,index){
            cy.wrap(el).select('selectValues[index]').should('have.value','selectValues[index]')
        })
    })
    it('verify functionality for enabled and disabled',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="lettuce"]').should('be.enabled')
    })
    it.only('verify functionality for enabled and disabled',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let sum=0
        cy.get('#t01').find('tr').each(function(el,index){
            if(index !=0){
                sum=sum+Number(el.children().last().text())
            }
        }).then(()=>{
            expect(sum).to.equal(159)
        })
        
    })
    
})