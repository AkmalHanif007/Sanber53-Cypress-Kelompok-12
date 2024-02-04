//Precondition harus ada 1 produk didalam cart

describe("Test View and Edit Cart Page", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");

    // Login
    cy.contains("Sign In").click();
    cy.get("#email").type("dyahast@mail.com");
    cy.get("#pass").type("Pass123!");
    cy.wait(1000);
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
    ).click();

    cy.wait(1000);

    cy.visit("https://magento.softwaretestingboard.com/checkout/cart/");
  });

  it.skip("Update size, warna dan quantity barang", () => {
    cy.get(".actions-toolbar > .action-edit").click();

    // cy.wait(4000);

    cy.get(".swatch-option.text.selected")
      .should("be.visible")
      .then((el) => {
        if (el.text() === "XL") {
          cy.get("#option-label-size-143-item-169").click();
        } else {
          cy.get("#option-label-size-143-item-170").click();
        }
      });

    cy.get(".swatch-option.color.selected")
      .should("exist")
      .then((el) => {
        const id = el.attr("id");

        if (id === "option-label-color-93-item-58") {
          cy.get("#option-label-color-93-item-50").click();
        } else {
          cy.get("#option-label-color-93-item-58").click();
        }
      });

    cy.get("#qty")
      .should("be.visible")
      .invoke("val")
      .then((inputValue) => {
        if (inputValue === "1") {
          cy.get("#qty").clear();
          cy.get("#qty").type("3");
        } else {
          cy.get("#qty").clear();
          cy.get("#qty").type("1");
        }
      });

    cy.wait(2000);

    cy.get(".fieldset > .actions > #product-updatecart-button").click();
  });

  it.skip("Update qty from cart page", () => {
    cy.get("#cart-605982-qty")
      .invoke("val")
      .then((inputValue) => {
        if (inputValue === "1") {
          cy.get("#cart-605982-qty").clear();
          cy.get("#cart-605982-qty").type("3");
        } else {
          cy.get("#cart-605982-qty").clear();
          cy.get("#cart-605982-qty").type("1");
        }
      });

    cy.get("#form-validate > .cart.main.actions > .action.update").click();
  });

  it("NEGATIVE - Update failed qty from cart page empty", () => {
    cy.get("#cart-605982-qty").clear();

    cy.get("#form-validate > .cart.main.actions > .action.update").click();

    cy.wait(1000);

    cy.get("#cart-605982-qty-error").should(
      "contain.text",
      "This is a required field."
    );
  });
});
