/// <reference types="cypress" />

describe("birthday-reminder", () => {
    it("renders correctly", () => {
        cy.visit("/");
        cy.findByRole("heading", { name: /5 birthdays today/i }).should('exist');

        cy.findByRole("button", { name: /clear all/i }).click();
        cy.findByRole("heading", { name: /0 birthdays today/i }).should('exist');
    });
});
