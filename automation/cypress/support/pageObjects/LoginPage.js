class LoginPage {
  visit() {
    cy.visit('/index.php?route=account/login');
  }
  fillEmail(email) {
    cy.get('#input-email').type(email);
  }
  fillPassword(password) {
    cy.get('#input-password').type(password);
  }
  submit() {
    cy.get('input[type="submit"]').click();
  }
}
export default LoginPage;