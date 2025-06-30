describe('Login Test', () => {
  it('Login válido', () => {
    cy.visit('/index.php?route=account/login');
    cy.get('#input-email').type('user@example.com');
    cy.get('#input-password').type('Password123');
    cy.get('input[type="submit"]').click();
    cy.contains('My Account');
  });
});