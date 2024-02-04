describe('Login & Edit Account Information', () => {
  it('Pencarian kata kunci valid', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    // Login
    cy.contains('Sign In').click()
    cy.get('#email').type('hanbewok46@gmail.com')
    cy.get('#pass').type('Hanbewok*46')
    cy.wait(1000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.wait(2000)

    // Edit Account Information 
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
    // Pilih My Account
    cy.contains('My Account').click()
    // Klik Edit
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#lastname').clear().type('meow123')
    // Klik Button Save
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-success > div').should('contain.text', 'You saved the account information.');
  })
})
