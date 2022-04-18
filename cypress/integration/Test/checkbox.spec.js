

describe('verfiy checkbox,radio,dropDown,enabled and disabled', () => {
    
    it('verify checbox using click function', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-1"]').click().should('not.be.checked')
    })
    it('verify the checkbox using check() and uncheck() function', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-3"]').check().should('be.checked')
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
    })
    it('verify the  multiple selection for checbox using check() and uncheck() function', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4']).should('not.be.checked')
    })
    it.only('verify the radio button functionality using click() funcnction', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })
    })