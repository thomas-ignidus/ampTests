Cypress.Commands.add('getPremium', () => {
    cy.get('li.ratingInformationTab').click()
    return cy.get('div.rating-info-div tr').first().find('td').last()
})

Cypress.Commands.add('openItem', (itemId) => {
    return cy.visit('https://suttongl.isceng.net/amp/detail/view/' + itemId)
})
