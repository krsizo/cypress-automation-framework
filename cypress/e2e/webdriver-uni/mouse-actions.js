/// <reference types="Cypress" />

describe("Test mouse actions", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    })

    it("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    });

    it("Should be able to drag and drop a draggable item", () => {
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it("Should be able to perform a double mouse click", () => {
        cy.get('#double-click').dblclick();
    });

    it("Should be able to hold down the left mouse click on a given element", () => {
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
        cy.wait(1000)
        cy.get('#click-box').trigger('mouseup').then(($elem) => {
            expect($elem).to.have.css('background-color', 'rgb(255, 99, 71)')
        })
    });
})