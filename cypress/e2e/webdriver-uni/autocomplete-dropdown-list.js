/// <reference types="Cypress" />

describe("Verify Autocomplete dropdown lists via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.visit("/")
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({ force: true })

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, $index, $list) => {
            const product = $el.text();
            const productToSelect = 'Almond'

            if (product === productToSelect) {
                $el.trigger('click')

                cy.get('#submit-button').click()
                cy.url().should('include', 'Almond')
            }
        }).then(() => {
            cy.get('#myInput').type('G')

            cy.get('#myInputautocomplete-list > *').each(($el, $index, $list) => {
                const product = $el.text();
                const productToSelect = 'Grapes'
    
                if (product === productToSelect) {
                    $el.trigger('click')
    
                    cy.get('#submit-button').click()
                    cy.url().should('include', 'Grapes')
                }
            })
            cy.get('#myInput').should('be.empty')
        })
    });
})