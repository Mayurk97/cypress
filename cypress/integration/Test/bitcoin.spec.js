describe('Validate the heading',()=>{
    it('Test case 1',()=>{
        cy.visit('https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732')
        cy.get('div[class="transactions"]').find('h3').should('have.text','25 of 2875 Transactions')
        //cy.contains('25 of 2875 Transactions').should('be.visible')
    })

    it('Validate the transactions ',()=>{
        cy.visit('https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732')
        cy.get('div[class="txn"]').each((el)=>{
           cy.log(el.text())
        })
    })
})