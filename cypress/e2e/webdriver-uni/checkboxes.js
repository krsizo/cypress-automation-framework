/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(() => {
        cy.navigateTo_WebdriverUni_Checkbox_Page();
    })

    it("Check and validate checkbox", () => {
       // cy.get('#checkboxes [type=checkbox]').check('option-1')
       // cy.get('#checkboxes [type=checkbox]').check('option-1').should('be.checked')
    
        cy.get('#checkboxes [value=option-1]').as('option-1')
        cy.get('@option-1').check().should('be.checked')
    });

    it("Uncheck and validate checkbox", () => {
        cy.get('#checkboxes [value=option-3]').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    });

    it("Check and validate multiple checkboxes", () => {
        // cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')

        cy.get("input[type='checkbox']").as('checkboxes')

        cy.get('@checkboxes').then($checkboxes => {
            cy.wrap($checkboxes).check().should('be.checked')
        })
    });
})