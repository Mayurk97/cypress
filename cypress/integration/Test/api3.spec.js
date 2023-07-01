
describe('to validate api ',()=>{
    it('to validate api POST response',()=>{
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
                "name":"mayur",
                "job":"QA"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.body).has.property('id')
            expect(res.body.name).to.eq("mayur")
        })
    })

    it('to validate api DELETE response',()=>{
        cy.request({
            method:"DELETE",
            url:'https://reqres.in/api/users/2',
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(204)
            expect(res.statusText).to.eq("No Content")
        })
    })

    it('to validate PUT response',()=>{
        cy.request({
            mehtod:"PUT",
            url:'https://reqres.in/api/users/2',
            body:{
                "name":"mayur",
                "job":"Test lead"
            },
            headers:{

                "userName":"mk"
            }

        }).then((res)=>{
            cy.log(res)
            expect(res).has.property('requestBody')
            expect(res.status).to.eq(200)
            expect(res.requestHeaders).has.property('userName')
            expect(res.requestHeaders.userName).to.eq("mk")
            expect(res.body.data).to.have.all.keys('avatar','email','first_name','id','last_name')

        })
    })

    it('to validate api GET reponse',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq("OK")
            expect(res.body).has.property('per_page',6)
        })
    })
})