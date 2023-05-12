
describe('Testing google elements', () => {
  before
  it('Google logo can be located and is visible', () => {
    cy.visit('https://www.google.com/search?q=1');
    cy.get(".logo a").should("be.visible");
  })

  it('Google search text area can be located and is visible', () => {
    cy.visit('https://www.google.com/search?q=1');
    cy.get("textarea").should("be.visible");
  })

  it('Add a query in the search and check the result', () => {
    cy.visit('https://www.google.com/search?q=1');
    cy.get("textarea").clear();
    cy.get("textarea").type("testing")
    cy.get('button[type="submit"]').click();
  })
})