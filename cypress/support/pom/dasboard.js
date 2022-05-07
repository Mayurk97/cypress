export const Dashboard ={

    dashboard:"#menu_dashboard_index"
}


export class dash {

    static verifydash(){
        cy.visit('/')
        cy.get(Dashboard.dashboard).should('be.visible')
    }
}