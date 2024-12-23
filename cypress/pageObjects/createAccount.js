class createAccountPage {
    navigateToCreateAccount() {
      cy.contains('Create an Account').should('be.visible').click();
    }
    enterFirstName(firstName) {
      cy.get('#firstname').type(firstName);
    }
    enterLastName(lastName) {
      cy.get('#lastname').type(lastName);
    }
    enterEmail(email) {
      cy.get('input[name="email"]').type(email);
    }
    enterPassword(password) {
      cy.get('#password').type(password);
    }
    confirmPassword(password) {
      cy.get('#password-confirmation').type(password);
    }
    createbtn() {
      cy.contains('span','Create an Account').click(); // Assuming a submit button exists
    }
  }
  export default createAccountPage;
  