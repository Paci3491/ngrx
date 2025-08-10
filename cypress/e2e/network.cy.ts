describe('Network', () => {
  beforeEach(() => {
    cy.viewport(1980, 1000);
    cy.visit('/cypress');
  });

  // INTERCEPT A HTTP GET CALL
  it('Should intercept a command', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/1', {
      title: 'Oida', // 3rd parameter is optional, and sets what will be returned
    });
    cy.getById('fetch-data-button').click();
    cy.getById('dummy-data-content').should('contain.text', 'Oida');
  });

  // FAKE POST CALL
  it('Should send fake post request', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {},
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });
});
