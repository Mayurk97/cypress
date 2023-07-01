


describe('demo',()=>{

    it('to check item',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('boston earbuds 141')
        cy.contains('boston earbuds 141').click().should('be.visible')
    })

    it.only('to validate amount',()=>{
        let sum = 2000
        cy.visit('https://www.amazon.in/boAt-Launched-Airdopes-413ANC-Signature/dp/B0B58J5N8M/ref=sr_1_1_sspa?crid=3P36UGZIAMCT6&keywords=boston+earbuds+141&qid=1658388776&sprefix=boston+earbuds%2Caps%2C379&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSDRLVFFKOVlVN05FJmVuY3J5cHRlZElkPUEwMDc2MjIzMlBXRE40MURWRU82UiZlbmNyeXB0ZWRBZElkPUExMDI0MjM4MUo0T1pWQzdUVUMxViZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=')
        cy.get('td[class="a-span12"]').as('amount')
        cy.get('@amount').then(parseFloat).then(function(el){
            cy.log(el)
            if( el == sum){
                sum = Number(el.children().text())
            }
        }).then(()=>{
            expect(sum).to.be.greaterThan(1999)
            expect(1999).to.be.lessThan(sum)
        })
    })
})