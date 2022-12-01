Cypress.Commands.add('searchByStatus', (status) => {
    cy.get('div.advancedSearch').click()
    cy.get('select[name="status_id"]').select(status)
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('openItem', (itemId) => {
    return cy.visit('https://suttongl.isceng.net/amp/detail/view/' + itemId)
})
