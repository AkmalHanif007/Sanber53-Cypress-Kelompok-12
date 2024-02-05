describe('Test Menu Account', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('Edit Account Information - Edit firstName & lastName', () => {
    
    // Login
    cy.contains('Sign In').click()
    cy.get('#email').type('hanifsanber53@gmail.com')
    cy.get('#pass').type('Passw0rd!')
    cy.wait(1000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    

    // ke menu ganti account
    cy.visit('https://magento.softwaretestingboard.com/customer/account')
    
    cy.get('.base').should('contain','My Account')
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#firstname').clear()
    cy.get('#firstname').type("First Name 1")
    cy.get('#lastname').clear()
    cy.get('#lastname').type("Last Name 1")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success > div').should('have.text','You saved the account information.')
  })
})