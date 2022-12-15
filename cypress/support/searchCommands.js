
Cypress.Commands.add('search', (status, program) => {
    cy.get('div.advancedSearch').click()
    cy.get('select[name="status_id"]').select(status)
    if(program != undefined){
        cy.get('select[name="program_name"]').select(program)
    }
    cy.get('button[type="submit"]').click()
})
Cypress.Commands.add('searchByStatus', (status) => {
    cy.search(status)
})
Cypress.Commands.add('openItem', (itemId, site) => {
    if(site == undefined){
        return cy.fixture('config').then((config)=>{
            site = config.testSite
            return cy.visit(site + '/amp/detail/view/' + itemId)
        })
    }
    return cy.visit(site + '/amp/detail/view/' + itemId)
})
