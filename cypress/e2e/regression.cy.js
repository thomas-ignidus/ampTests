

describe('regression.cy.js', () => {
    it('running regression', () => {
        cy.fixture('programGroups').then((programs)=>{
            for(let i=0; i< programs.length; i++){
                    if(i==0){
                        cy.login()
                    }
                    cy.search('Quote Approved', programs[i])
                    let foundApp = true
                cy.get("#search_omga_items td").then(function(cell) {
                    if(cell.text().indexOf('Sorry') == -1){
                        cy.get("tr.itemRow.searchRow td").then(function(cells) {
                            if(cells.length){
                                let itemId = cells.first().text()
                                cy.openItem(itemId)
                                cy.bindApp()
                                //     cy.getStatus().should('have.value', 'Bound')
                            }
                        })
                    } else{
                        cy.log('could find any quote approved ' + programs[i] + ' applications')
                    }
                })
            }
        })
    })
})
