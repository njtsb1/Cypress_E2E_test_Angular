describe('Logout', () => {
    it('Logout via Profile', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.contains('Settings').click()
        cy.url().should('include', '/settings')
        cy.get('.btn-outline-danger').click()
    })
})
