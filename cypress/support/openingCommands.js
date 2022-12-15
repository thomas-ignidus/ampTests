
Cypress.Commands.add('login', (site) => {
    cy.fixture('config').then((config)=>{
        if(site == undefined){
            site = config.testSite
        }
        cy.visit(site + '/amp/login')
        cy.get('#username').type(config.username)
        cy.get('#password').type(config.password)
        cy.get('button[type="submit"]').click()
    })
})
