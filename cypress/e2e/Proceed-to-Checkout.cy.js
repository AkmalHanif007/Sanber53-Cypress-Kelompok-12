describe('Cypress automation', () => {
  it('Proceed to Checkout', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    // Login
    cy.contains('Sign In').click()
    cy.get('#email').type('hanbewok46@gmail.com')
    cy.get('#pass').type('Hanbewok*46')
    cy.wait(1000)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.wait(2000)
    // Pilih Shop New Yoga Collection
    cy.contains('Shop New Yoga').click()
    // Select Ida Workout Parachute Pant
    cy.get(':nth-child(4) > .product-item-info > .photo > .produe2ct-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.wait(1000)
    // Select Size 29
    cy.get('#option-label-size-143-item-172').click()
    // Select color : black
    cy.get('#option-label-color-93-item-49').click()
    cy.wait(1000)
    // Add to cart
    cy.get('#product-addtocart-button').click()
    cy.wait(1000)
    // Click Shopping cart
    cy.get('.showcart').should('be.visible')
    cy.get('.showcart').click()
    cy.wait(2000)
    // Click Button Proceed to Checkout
    cy.get('#top-cart-btn-checkout').click()
    cy.wait(2000)
    // Click button Next
    cy.get('.button > span').should('be.visible')
    cy.get('.button > span').click()
    cy.wait(2000)
    // Click button Place Order
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').click()
  })

})

