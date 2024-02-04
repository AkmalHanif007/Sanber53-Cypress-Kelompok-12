describe("Test Automation for Create Account", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  // Positive Sign Up
  it("Berhasil membuat akun dan diarahkan ke halaman account", () => {
    // Open menu Create an Account
    cy.contains("Create an Account").click();
    cy.get("#firstname").type("Dyah");
    cy.get("#lastname").type("Puji");
    cy.get("#email_address").type("dyahpuji@mail.com");
    cy.get("#password").type("Pass123!");
    cy.get("#password-confirmation").type("Pass123!");

    // Klik tombol Create an Account
    cy.get("#form-validate > .actions-toolbar > .primary > .submit").click();

    cy.wait(1000);

    // Masuk ke halaman account dengan kondisi sudah login
    cy.url().should("include", "/customer/account/");
  });

  // Negative Sign Up
  it("Gagal membuat akun karna seluruh field yang harus diisi kosong sehingga muncul error validasi input", () => {
    // Open menu Create an Account
    cy.contains("Create an Account").click();
    cy.get("#firstname").type("dyah");
    cy.get("#lastname").type("puji");
    cy.get("#email_address").type("dyahpuji@mail.com");
    cy.get("#password").type("passs123!");
    cy.get("#password-confirmation").type("passs123!");

    // hapus teks yang sudah diinput
    cy.get("#firstname").clear();
    cy.get("#lastname").clear();
    cy.get("#email_address").clear();
    cy.get("#password").clear();
    cy.get("#password-confirmation").clear();

    // Klik tombol Create an Account
    cy.get("#form-validate > .actions-toolbar > .primary > .submit").click();

    cy.wait(1000);

    // Muncul error validasi karna field kosong
    cy.get("#firstname-error").should(
      "contain.text",
      "This is a required field."
    );
    cy.get("#lastname-error").should(
      "contain.text",
      "This is a required field."
    );
    cy.get("#email_address-error").should(
      "contain.text",
      "This is a required field."
    );
    cy.get("#password-error").should(
      "contain.text",
      "This is a required field."
    );
    cy.get("#password-confirmation-error").should(
      "contain.text",
      "This is a required field."
    );
  });

  // Negative Sign Up - invalid email format
  it("Gagal membuat akun karna email yang di inputkan tidak sesuai dengan format email yang seharusnya", () => {
    // Open menu Create an Account
    cy.contains("Create an Account").click();

    // input all field register
    cy.get("#firstname").type("dyaha");
    cy.get("#lastname").type("pujias");
    cy.get("#email_address").type("dyahpujiasmail.com");
    cy.get("#password").type("passs123!");
    cy.get("#password-confirmation").type("pass123!");

    // Klik tombol Create an Account
    cy.get("#form-validate > .actions-toolbar > .primary > .submit").click();

    cy.wait(1000);

    // Muncul error validasi karna email yang di inputkan tidak sesuai dengan format email yang seharusnya
    cy.get("#email_address-error").should(
      "contain.text",
      "Please enter a valid email address (Ex: johndoe@domain.com)."
    );
  });

  // Negative Sign Up - Input password field less then 8 character
  it("Gagal membuat akun karna field password yang harus diisi dengan minimal 8 karakter hanya diisi kurang dari 8 karakter sehingga muncul error validasi input", () => {
    // Open menu Create an Account
    cy.contains("Create an Account").click();
    cy.get("#firstname").type("dyaha");
    cy.get("#lastname").type("pujias");
    cy.get("#email_address").type("dyahpujias@mail.com");
    cy.get("#password").type("pa123!");
    cy.get("#password-confirmation").type("pa123!");

    // Klik tombol Create an Account
    cy.get("#form-validate > .actions-toolbar > .primary > .submit").click();

    cy.wait(1000);

    // Muncul error validasi karna field password yang harus diisi dengan minimal 8 karakter hanya diisi kurang dari 8 karakter
    cy.get("#password-error").should(
      "contain.text",
      "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored."
    );
  });

  // Negative Sign Up - Input password field more then 8 char but without number, symbol and Uppercase char
  it("Gagal membuat akun karna field password yang diisi sudah 8 karakter tapi tanpa uppercase, symbol dan number sehingga muncul error validasi input", () => {
    // Open menu Create an Account
    cy.contains("Create an Account").click();

    // isi field
    cy.get("#firstname").type("dyahas");
    cy.get("#lastname").type("pujiass");
    cy.get("#email_address").type("dyahpujissas@mail.com");
    cy.get("#password").type("dyahpujiastuti");
    cy.get("#password-confirmation").type("dyahpujiastuti");

    // Klik tombol Create an Account
    cy.get("#form-validate > .actions-toolbar > .primary > .submit").click();

    cy.wait(1000);

    // Muncul error validasi karna field password yang diisi sudah 8 karakter tapi tanpa uppercase, symbol dan number
    cy.get("#password-error").should(
      "contain.text",
      "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
    );
  });
});
