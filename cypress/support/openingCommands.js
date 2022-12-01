
Cypress.Commands.add('login', (site, username, password) => {
    cy.visit(site + '/amp/login')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('button[type="submit"]').click()
})
