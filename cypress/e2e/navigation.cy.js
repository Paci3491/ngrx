describe("page navigation", () => {
  beforeEach(() => {
    cy.viewport(1980, 1000);
    cy.visit("http://localhost:4200/cypress");
  });

  it("should navigate between pages", () => {
    cy.get('[data-cy="home-link"]').click();
    cy.location("pathname").should("equal", "/home");

    //Aliases
    cy.visit("http://localhost:4200/cypress");
    cy.get('[data-cy="home-link"]').as("homeButton");
    cy.get("@homeButton").click();

    //then() function
    cy.visit("http://localhost:4200/cypress");
    cy.get('[data-cy="home-link"]').then((el) => {
      el.attr("disabled"); // can check various methods of html element
      expect(el.attr("disabled")).to.be.undefined; // regular assertion does not work here
    });

    //Keys simulation
    cy.visit("http://localhost:4200/cypress");
    cy.get("button#dialog-button").click();
    cy.get("textarea").type("Moja manka vari lepsie jak tvoja{enter}");
  });

  it.only("should blur the inputs", () => {
    cy.get("button#dialog-button").click();
    cy.get("textarea").focus();
    cy.get("textarea").blur();
  });
});
