describe('Searh Product', () => {
    it('Pencarian kata kunci valid', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Login
      cy.contains('Sign In').click()
      cy.get('#email').type('hanbewok46@gmail.com')
      cy.get('#pass').type('Hanbewok*46')
      cy.wait(1000)
      // Click Search Box
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      // Ketik Jacket 
      cy.get('#search').type('Jacket').click()
      cy.wait(1000)
      cy.contains('Jacket for men').click()
      // Pilih salah satu Jacket yang ditampilkan
      cy.get(':nth-child(5) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })
  
    // Negative Case
    it('Pencarian Tidak ditemukan', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      // Login
      cy.contains('Sign In').click()
      cy.get('#email').type('hanbewok46@gmail.com')
      cy.get('#pass').type('Hanbewok*46')
      cy.wait(1000)
      // Click Search Box
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      // Ketik Jacket 
      cy.get('#search').type('Topi{enter}')
      cy.wait(1000)
      cy.get('.column > .message > div').should('contain.text', 'Your search returned no results.');
    })
  
  })
  
  