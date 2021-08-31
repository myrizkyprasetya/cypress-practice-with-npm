describe('kumpulan test case', function(){
    it('tc-01', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        
        cy.get('#firstName').type('Dojo', { force: true }).should('have.value', 'Dojo');
        cy.get('#lastName').type('Yasif').should('have.value', 'Yasif');
        cy.get('#userEmail').type('emailcoba@gmail.com').should('have.value', 'emailcoba@gmail.com');
 
        cy.get('[type="radio"]').check('Male', { force: true }).should('be.checked')

        cy.get('#userNumber').type('0881234556').should('have.value', '0881234556')

        cy.get('#dateOfBirthInput').invoke('val', '17 Dec 2017')
        
        cy.get('.subjects-auto-complete__value-container').type('Art{enter}Comp{enter}Mat{enter}', { delay: 500 })

        cy.get('[type="checkbox"]').check(['1', '3'], { force: true }).should('be.checked')

        cy.get('#uploadPicture').should('have.id', 'uploadPicture').attachFile('Cosmos.jpg')


        cy.get('#currentAddress').type('Jalan Melati nomor 42').should('have.value', 'Jalan Melati nomor 42')

        cy.get('#stateCity-wrapper > :nth-child(2)').should('be.visible').type('Hary{enter}').should('have.class', 'col-md-4 col-sm-12')
        cy.get('#stateCity-wrapper > :nth-child(3)').should('be.visible').type('Pani{enter}').should('have.class', 'col-md-4 col-sm-12')

        cy.get('#submit').should('have.text', 'Submit').click()

    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false   
    })
})