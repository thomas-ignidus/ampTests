describe('bvt.cy.js', () => {
    it('open detail view', () => {
        cy.login()
        cy.searchByStatus('Quote Approved')
        cy.get("tr.itemRow.searchRow td").first().then(function(itemId) {
            cy.openItem(itemId.text())
        })
        cy.getPremium().should('contain', '$')
    })
})
