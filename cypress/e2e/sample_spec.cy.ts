describe("Routing", () => {
  it("Navigates to other pages", () => {
    // eslint-disable-next-line no-undef
    cy.visit("http://localhost:3000");

    // eslint-disable-next-line no-undef
    cy.get("[data-cy=menu]").should("exist");
    // eslint-disable-next-line no-undef
    cy.get("[data-cy=menu]").contains("Team Members").click();
  });
});
