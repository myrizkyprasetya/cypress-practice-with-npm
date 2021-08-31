describe('kumpulan test case', function(){
    it('tc-01', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        
        cy.get('#firstName').type('Dojo', { force: true }).should('have.value', 'Dojo');
        cy.get('#lastName').type('Yasif').should('have.value', 'Yasif');
        cy.get('#userEmail').type('emailcoba@gmail.com').should('have.value', 'emailcoba@gmail.com');
 
        cy.get('[type="radio"]').check('Male', { force: true }).should('be.checked')

        cy.get('#userNumber').type('0881234556').should('have.value', '0881234556')

        cy.get('#dateOfBirthInput').should('be.visible').click()
        
        cy.get('.subjects-auto-complete__value-container').should('not.be.visible').type('Computer Science').should('have.value', 'Computer Science')

        cy.get('[type="checkbox"]').check(['1', '3'], { force: true }).should('be.checked')


        cy.get('#currentAddress').type('Jalan Melati nomor 42').should('have.value', 'Jalan Melati nomor 42')


    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false   
    })
})