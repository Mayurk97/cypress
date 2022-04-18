

describe('verify the comments in API',()=>{
    it('verify the GET comment',()=>{
       cy.request({
           method:'GET',
           url:'https://jsonplaceholder.cypress.io/comments/1'
       }).then((response)=>{
           cy.log(response)
           expect(response.body.body).to.includes('laudantium')
           expect(response.status).to.eq(200)
           cy.log(response.body.data)
           
       })
    })
    it('verify the DELETE comment',()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.cypress.io/comments/1'
        }).then((res)=>{
             cy.log(res)
             expect(res.status).to.eq(200)
        })
    })
})