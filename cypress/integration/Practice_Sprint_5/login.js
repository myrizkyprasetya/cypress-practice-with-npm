
describe('Login Demoblaze', function() {
    it('Login with valid user', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('dojo-test1630290442536').should('have.value', 'dojo-test1630290442536')
        cy.get('#loginpassword').type('do1234').should('have.value', 'do1234')
        cy.get('button').contains('Log in').click()
    })

    it('Open login modal and then user close it', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('dojo-test1630290442536').should('have.value', 'dojo-test1630290442536')
        cy.get('#loginpassword').type('do1234').should('have.value', 'do1234')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    })
})
