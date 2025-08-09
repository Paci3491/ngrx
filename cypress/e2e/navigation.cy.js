describe("page navigation", () => {
  // runs only one time
  before(() => {});

  beforeEach(() => {
    cy.viewport(1980, 1000);
    cy.visit("/cypress");
  });

  after(() => {});

  afterEach(() => {});

  it("should navigate between pages", () => {
    cy.get('[data-cy="home-link"]').click();
    cy.location("pathname").should("equal", "/home");

    //Aliases
    cy.visit("/cypress");
    cy.get('[data-cy="home-link"]').as("homeButton");
    cy.get("@homeButton").click();

    //then() function
    cy.visit("/cypress");
    cy.get('[data-cy="home-link"]').then((el) => {
      el.attr("disabled"); // can check various methods of html element
      expect(el.attr("disabled")).to.be.undefined; // regular assertion does not work here
    });

    //Keys simulation
    cy.visit("/cypress");
    cy.get("button#dialog-button").click();
    cy.get("textarea").type("Moja manka vari lepsie jak tvoja{enter}");
  });

  //Screenshots and blur
  it("should blur the inputs", () => {
    cy.get("button#dialog-button").click();
    cy.get("textarea").focus();
    cy.get("textarea").blur();
    // cy.screenshot();
    cy.get("input").type("Moja manka vari lepsie jak tvoja{enter}");
  });

  //Local config
  it(
    "should run only in firefox",
    { timeout: 5000, browser: "firefox" },
    () => {},
  );
});
