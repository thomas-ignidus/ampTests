Cypress.Commands.add('getPremium', () => {
    cy.get('li.ratingInformationTab').click()
    return cy.get('div.rating-info-div tr').first().find('td').last()
})
Cypress.Commands.add('getStatus', () => {
    return cy.get('#applicationContainer span.ui.basic.label').first().text()
})
Cypress.Commands.add('bindApp', () => {
    cy.get('#split_li').click()
    cy.get('#topView').then($topView => {
        if($topView.find('tr[data-document_type_id].danger a').length){
            $topView.find('tr[data-document_type_id].danger a').then((buttons) => {
                for(let i=0; i < buttons.length; i++){
                    buttons[i].click()
                }
            })
        }
    })

    cy.get('button[name="statusForward"]').click()
    cy.pause()

})

