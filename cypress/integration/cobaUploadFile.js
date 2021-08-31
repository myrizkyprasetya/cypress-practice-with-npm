describe('upload file', function(){   
    it('tc upload file', function(){   
        cy.visit('https://admin.pkh.dojobox.id/')

        cy.get('#input-email').type('e@dojobox.id')
        cy.get('#input-password').type('admin')

    })
})