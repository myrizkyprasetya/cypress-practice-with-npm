describe('test case login', function(){
    before(()=>{
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('Proses Pembelian Barang', function(){        
        //proses login
        cy.get('#login2').should('have.id', 'login2').click()
        cy.get('#loginusername').type('dojo-Luoyi', {force:true}).should('have.value', 'dojo-Luoyi')
        cy.get('#loginpassword').type('dojo-luoyi').should('have.value', 'dojo-luoyi')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('have.class', 'btn btn-primary').click()
        
        //proses pembelian barang
        cy.wait(3000)
        cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').should('have.text', 'HTC One M9', {force:true}).click()
        cy.get('.col-sm-12 > .btn').should('have.text', 'Add to cart').click()
        
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})