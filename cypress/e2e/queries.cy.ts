describe('Queries', () => {
  beforeEach(() => {
    cy.viewport(1980, 1000);
    cy.visit('/cypress');
  });

  it('should open and close dialog with custom command', () => {
    cy.openDialog();
  });

  it('should click on router link via query', () => {
    cy.getById('home-link').click();
  });

  it('should run task()', () => {
    cy.task('seedDatabase');
  });
});
