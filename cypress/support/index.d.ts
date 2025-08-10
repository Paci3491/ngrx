declare namespace Cypress {
  interface Chainable {
    closeDialog(): void;
    openDialog(): void;
    getById(id: any): any;
  }
}
