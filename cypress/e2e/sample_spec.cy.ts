/* eslint-disable */
describe("Routing", () => {
  it("Navigates to other pages", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-cy=menu]").should("exist");
    cy.get("[data-cy=menu]").contains("Team Members").click();
    cy.get("[data-cy=menu]").contains("Timesheet").click();
    cy.get(".Buttonstyled__Button-sc-596st9-0").click();
    cy.get("[data-cy=sub-header]").contains("Timesheets");
  });
});
