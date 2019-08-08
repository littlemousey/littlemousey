describe('Homepage', () => {
  it('Visits index page', () => {
    cy.visit('/')
    cy.contains('h1', 'Good afternoon')
  })

  it('There is a travels page', () => {
    cy.get('[data-testid="drawer-button"]').click()
    cy.get('[data-testid="Travels"]').click()
    cy.contains('h1', 'This mouse loves traveling and exploring the world')
  })

  it('Visits weather page', () => {
    cy.get('[data-testid="weather-button"]').click()
    cy.contains('h3', 'The weather in the Netherlands today')
  })
})
