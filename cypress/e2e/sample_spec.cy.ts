describe("Routing", () => {
  it("Navigates to other pages", () => {
    cy.visit("https://team-awesome-jarmo-dh5j2l8dy-fecc.vercel.app");

    cy.get("[data-cy=button]").should("exist");
    // cy.get("[data-cy=menu-button]").click();
    // cy.get("[data-cy=menu]").contains("Team Members").click();
  });
});
