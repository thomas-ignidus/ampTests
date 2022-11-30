describe('detailView.cy.js', () => {
  it('open detail view', () => {
    cy.login('https://suttongl.isceng.net', 'thomas@sisinsure.com', 'f')

    cy.get('div.advancedSearch').click()
    cy.get('select[name="status_id"]').select('Quote Approved')
    cy.get('button[type="submit"]').click()
    cy.get("tr.itemRow.searchRow td").first().then(function($itemId) {
      cy.visit('https://suttongl.isceng.net/amp/detail/view/' + $itemId.text())
    })
  })
})
