describe('Counter App', () => {
  it('should display the initial counter value', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Counter: 0');
  });

  it('should increment the counter', () => {
    cy.visit('/');
    cy.contains('Increment').click();
    cy.get('h1').should('have.text', 'Counter: 1');
  });

  it('should decrement the counter', () => {
    cy.visit('/');
    cy.contains('Decrement').click();
    cy.get('h1').should('have.text', 'Counter: -1');
  });

  it('should handle multiple increments and decrements', () => {
    cy.visit('/');
    cy.contains('Increment').click();
    cy.contains('Increment').click();
    cy.contains('Decrement').click();
    cy.get('h1').should('have.text', 'Counter: 1');
  });
});
