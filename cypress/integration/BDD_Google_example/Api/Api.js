import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('User send the request for get multiple users', () => {
    cy.request({
        method: "GET",
        url: 'https://reqres.in/api/users?page=2',
    }).as('getUser')
})


Then('Users should be display', () => {

    cy.get('@getUser').then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body).property('page')
        expect(resp.body.page).to.eq(2)
        expect(resp.body.data.length).to.eq(6)
        expect(resp.body).property('data').with.lengthOf(6)
        expect(resp.body).to.include.keys("total_pages", "per_page")
    })
})



Given('User send the post request to create with {word} and {word}', (name, job) => {
    cy.request({
        method: 'POST',
        url: "https://reqres.in/api/users",
        body: {
            "name": name,
            "job": job
        }
    }).as('postUser')
})


Then('User should be created with {word} and {word}', (name, job) => {

    cy.get('@postUser').then((resp) => {
        expect(resp.status).to.eq(201)
        expect(resp.body).property('id')
        expect(resp.body).property('createdAt')
        expect(resp.body.name).to.eq(name)
        expect(resp.body.job).to.eq(job)
        expect(resp.body).to.have.property('id')

       
    })

  
})