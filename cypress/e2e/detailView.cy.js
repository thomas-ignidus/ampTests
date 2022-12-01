describe('detailView.cy.js', () => {
  it('open detail view', () => {
    cy.fixture('config').then((config)=>{
      cy.login(config.testSite, config.username, config.password)
    })
    cy.searchByStatus('Quote Approved')
    cy.get("tr.itemRow.searchRow td").first().then(function(itemId) {
      cy.openItem(itemId.text())
    })
    cy.getPremium().should('contain', '$')
  })
})
