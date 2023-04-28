class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
}
export default AutoStore_HairCare_PO;