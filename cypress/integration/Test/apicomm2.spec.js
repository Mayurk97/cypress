


describe('Api testing with alias',function(){
    beforeEach(function(){
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).as('pageUser')
    })
    it('validate the status',function(){
        cy.get('@pageUser').its('status').should('equal',200)
        cy.get('@pageUser').its('statusText').should('equal',"OK")
        
    })
})


describe('verify functionality for api',function(){
    it('verify GET request to create user',function(){
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(res){
            cy.log(res)
            expect(res.body).has.property('per_page',6)
            expect(res.body).has.property('page',2)
            expect(res.body.data).to.have.length(6)
            res.body.data.forEach(element=>{
                expect(element).to.have.all.keys('id','email','first_name','last_name','avatar')
            })
        })
    })
    it('verify the post request using fixture',function(){
       cy.fixture('createUser').then(function(payload){
           cy.request({
               method:"POST",
               url:"https://reqres.in/api/users",
               body:payload
           }).then(function(res){
               cy.log(res)
               expect(res.body).to.have.all.keys('id','job','name','createdAt')
           })
       }) 
    })
})