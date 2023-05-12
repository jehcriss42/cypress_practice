
describe('Testing google elements', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/search?q=1')
  })

  it('Google logo can be located and is visible', () => {
    cy.get(".logo a").should("be.visible");
  })

  it('Google search text area can be located and is visible', () => {
    cy.get("textarea").should("be.visible");
  })

  it('Add a query in the text search area and verify the result', () => {
    cy.get("textarea")
      .clear()
      .type("testing");

    cy.get('button[type="submit"]').click();

    cy.get("textarea")
      .get('[role="combobox"]')
      .should('have.text', 'testing');

    cy.get('#result-stats').should('not.be.empty');
  })
})