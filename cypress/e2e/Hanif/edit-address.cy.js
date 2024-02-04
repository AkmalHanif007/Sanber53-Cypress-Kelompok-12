describe('Test Menu Address', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('Sukses Add Address', () => {
    
    // Login
    cy.contains('Sign In').click()
    cy.get('#email').type('hanifsanber53@gmail.com')
    cy.get('#pass').type('Passw0rd!')
    cy.wait(1000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    

    // ke menu ganti address book
    cy.visit('https://magento.softwaretestingboard.com/customer/address/new/')
    cy.get('#country').select('Indonesia')
    cy.get('#country').should('have.value', 'ID')
    cy.get('#telephone').type('085811812813')
    cy.get('#street_1').type('Jl. Jakarta Raya')
    cy.get('#city').type('DKI Jakarta')
    cy.get('#region').type('Jakarta Pusat')
    cy.get('#zip').type('11555')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success').should('be.visible')
    cy.get('.message-success > div').should('contain.text', 'You saved the address.')
  })

  it('Gagal Add Address', () => {
    
    // Login
    cy.contains('Sign In').click()
    cy.get('#email').type('hanifsanber53@gmail.com')
    cy.get('#pass').type('Passw0rd!')
    cy.wait(1000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    

    // ke menu ganti address book
    cy.visit('https://magento.softwaretestingboard.com/customer/address/new/')
    cy.wait(1000)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#telephone-error').should('be.visible')
    cy.get('#telephone-error').should('contain.text', 'This is a required field.')
    cy.get('#street_1-error').should('be.visible')
    cy.get('#street_1-error').should('contain.text', 'This is a required field.')
    cy.get('#city-error').should('be.visible')
    cy.get('#city-error').should('contain.text', 'This is a required field.')
    cy.get('#zip-error').should('be.visible')
    cy.get('#zip-error').should('contain.text', 'This is a required field.')
  })

  it('Sukses Edit Billing Address', () => {
    
    // Login
    cy.contains('Sign In').click()
    cy.get('#email').type('hanifsanber53@gmail.com')
    cy.get('#pass').type('Passw0rd!')
    cy.wait(1000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    

    // ke menu ganti address book
    cy.visit('https://magento.softwaretestingboard.com/customer/address')
    cy.get('.box-address-billing > .box-actions > .action > span').click()
    cy.get('#lastname').clear().type('Sadega')
    cy.get('#telephone').clear().type('085899899899')
    cy.get('#street_1').clear().type('Jl. Tanah Abang')
    cy.get('#city').clear().type('DJakarta')
    cy.get('#region').clear().type('Indonesia')
    cy.get('#zip').clear().type('99999')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success').should('be.visible')
    cy.get('.message-success > div').should('contain.text', 'You saved the address.')
  })

  it('Gagal Edit Billing Address', () => {
    
    // Login
    cy.contains('Sign In').click()
    cy.get('#email').type('hanifsanber53@gmail.com')
    cy.get('#pass').type('Passw0rd!')
    cy.wait(1000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    

    // ke menu ganti address book
    cy.visit('https://magento.softwaretestingboard.com/customer/address')
    cy.get('.box-address-billing > .box-actions > .action > span').click()
    cy.get('#lastname').clear()
    cy.get('#telephone').clear()
    cy.get('#street_1').clear()
    cy.get('#city').clear()
    cy.get('#region').clear()
    cy.get('#zip').clear()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#telephone-error').should('be.visible')
    cy.get('#telephone-error').should('contain.text', 'This is a required field.')
    cy.get('#street_1-error').should('be.visible')
    cy.get('#street_1-error').should('contain.text', 'This is a required field.')
    cy.get('#city-error').should('be.visible')
    cy.get('#city-error').should('contain.text', 'This is a required field.')
    cy.get('#zip-error').should('be.visible')
    cy.get('#zip-error').should('contain.text', 'This is a required field.')
  })
})