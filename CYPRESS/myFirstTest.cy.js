describe('my First Test', () =>{
    it('verify title-positive test', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
        // cy.get('').type('')
        // cy.get('').click()
    })

    it('verify title-negative test', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM23')
        // cy.get('').type('')
        // cy.get('').click()
    })

})