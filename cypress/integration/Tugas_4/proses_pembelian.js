describe('test case login', function(){
    before(()=>{
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('Proses Pembelian Barang', function(){        
        //proses login
        cy.get('#login2').should('have.id', 'login2').click()
        cy.get('#loginusername').type('dojo-Luoyi', {force:true}).should('have.value', 'dojo-Luoyi')
        cy.get('#loginpassword').type('dojo-luoyi').should('have.value', 'dojo-luoyi')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('have.class', 'btn btn-primary').click().wait(3000)
        
        //proses pembelian barang
        cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').should('have.text', 'HTC One M9', {force:true}).click()
        cy.get('.col-sm-12 > .btn').should('have.text', 'Add to cart').click()
        cy.get('.active > .nav-link').should('have.class', 'nav-link').click().wait(2000)
        cy.get('#next2').should('have.id', 'next2').click()

        cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Dell i7 8gb', {force:true}).click()
        cy.get('.col-sm-12 > .btn').should('have.text', 'Add to cart').click()
        cy.get('.active > .nav-link').should('have.class', 'nav-link').click().wait(2000)
        cy.get('#next2').should('have.id', 'next2').click()

        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Apple monitor 24', {force:true}).click()
        cy.get('.col-sm-12 > .btn').should('have.text', 'Add to cart').click()
        cy.get('#cartur').should('have.text', 'Cart').click()
        
        cy.get('.col-lg-1 > .btn').should('have.text', 'Place Order').click().wait(2000)

        //mengisi place order       
        cy.get('#name').type('Luoyi', {force:true}).should('have.value', 'Luoyi');
        cy.get('#country').type('Japan').should('have.value', 'Japan');
        cy.get('#city').type('Osaka').should('have.value', 'Osaka');
        cy.get('#card').type('62312345667').should('have.value', '62312345667');
        cy.get('#month').type('August').should('have.value', 'August');
        cy.get('#year').type('2021').should('have.value', '2021');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('have.class', 'btn btn-primary').click().wait(3000)
        cy.get('.confirm').should('have.text', 'OK').click()
        
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})