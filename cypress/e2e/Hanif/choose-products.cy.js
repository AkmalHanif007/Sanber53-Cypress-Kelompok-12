describe('Test Choose Products', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    })
    
    it.skip('Sukses Choose Products', () => {
      
      // Login
      cy.contains('Sign In').click()
      cy.get('#email').type('hanifsanber53@gmail.com')
      cy.get('#pass').type('Passw0rd!')
      cy.wait(1000)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    
  
      // ke menu ganti address book
      cy.visit('https://magento.softwaretestingboard.com/men.html')
      cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#option-label-size-143-item-169').click()
      cy.get('#option-label-color-93-item-52').click()
      cy.get('#qty').clear().type('5')
      cy.get('#product-addtocart-button').click()
      cy.get('.message-success').should('be.visible')
      cy.get('.message-success > div').should('contain.text', 'You added Argus All-Weather Tank to your shopping cart.')
    })

    it('Gagal Choose Products', () => {
      
        // Login
        cy.contains('Sign In').click()
        cy.get('#email').type('hanifsanber53@gmail.com')
        cy.get('#pass').type('Passw0rd!')
        cy.wait(1000)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()    
    
        // ke menu ganti address book
        cy.visit('https://magento.softwaretestingboard.com/men.html')
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#product-addtocart-button').click()
        cy.wait(1000)
        cy.get('.product-add-form').should('contain.text', 'This is a required field.')
    })
  })