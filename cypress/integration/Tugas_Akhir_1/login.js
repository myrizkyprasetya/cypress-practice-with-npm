describe('proses login', ()=>{
    it('tc-login', ()=>{
        cy.visit('https://admin.pkh.dojobox.id/')

        cy.get('#input-email').type('e@dojobox.id', {force:true}).should('have.value', 'e@dojobox.id')

        cy.get('#input-password').type('admin').should('have.value', 'admin')

        cy.get('#btn-login').should('have.id', 'btn-login').click()

    })
})