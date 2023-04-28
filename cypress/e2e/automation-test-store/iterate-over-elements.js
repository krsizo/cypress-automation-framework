/// <reference types="Cypress" />

describe("Iterate over elements", () => {
    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("Log information of all hair care products", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + ": " + $el.text())
        })
    });

    it("Select specific product", () => {
        cy.selectProduct('Curls to straight Shampoo');
    });

    it("Select another specific product", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });
})