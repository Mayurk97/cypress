export const Dashboard_selector ={

    dashboard:"#welcome"
}


export class dash {

    static verifydash(){
        cy.get(Dashboard_selector.dashboard).should('be.visible')
    }
}