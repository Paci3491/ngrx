describe('Dialog functionality', () => {
  beforeEach(() => {
    cy.viewport(1980, 1000); // Set viewport to 550px x 750px
    cy.visit('http://localhost:4200/cypress');
  });

  it('should open and close the dialog by clicking backdrop', () => {
    cy.get('button#dialog-button').click();
    cy.get('div.cdk-overlay-backdrop').should('exist');
    cy.get('div.cdk-overlay-backdrop').click({ force: true });
    cy.get('div.cdk-overlay-backdrop').should('not.exist');
  });

  it('should open and close the dialog by clicking the button', () => {
    cy.get('button#dialog-button').click();
    cy.get('div.cdk-overlay-backdrop').should('exist');
    cy.get('button#dialog-cancel-button').click();
    cy.get('div.cdk-overlay-backdrop').should('not.exist');
  });

  it('should fill the input and text area', () => {
    cy.get('button#dialog-button').click();
    cy.get('input').type('Tvoja manka vari lepsie jak moja');
    cy.get('textarea').type('Moja manka vari lepsie jak tvoja');
    cy.get('input').clear();
  });

  it('should fill the select box', () => {
    cy.get('button#dialog-button').click();
    cy.get('#dialog-select').click();
    cy.get('mat-option').contains('option 3').click();
    cy.get('#dialog-select').should('contain.text', 'option 3');

    cy.get('#dialog-select').click();
    cy.get('mat-option').first().click();
    cy.get('#dialog-select').should('contain.text', 'option 1');
  });
});
