let AccesToken = "A21AAK6KfnihLwyx3GlYUHelhVvbeI-f74Uipc1cSVEs8C8R4UU8k3KHW7x34EVScu3nSZL4g_Cm1yrY95xzs_wVZZi0xsdwQ"
describe('Validate the Gorest POST api', () => {
    it('Verify the Gorest POST Api', () => {
        let id =""
        cy.request({
            failOnStatusCode: false,
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: `Bearer ${AccesToken}`
            },
            body: {
                 name:"mayur kadam",
                 gender: "male",
                 email: "mayur45@gmail.com",
                 status: "active"
            }
        })
    })
})