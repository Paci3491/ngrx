describe('Test the Basics', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/cypress');
  });

  it('should render the main and sub Title', () => {
    cy.get('#main-title');
    cy.get('h3.sub-title');
  });

  it('should contain correct text in the main and sub Title', () => {
    cy.get('h2').should('have.length', 1);
    cy.get('#main-title').should('contain.text', 'title');
    cy.get('.sub-title').should('contain.text', 'subtitle');
  });
});
