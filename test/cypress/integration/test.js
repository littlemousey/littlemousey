describe('Homepage', () => {
  it('Visits index page', () => {
    cy.visit('/')
    cy.contains('h1', 'Good afternoon')
  })

  it('There is a travels page', () => {
    // cy.get('[data-testid="weather-btn"]').click()
    cy.get('[data-testid="Travels"]').click()
    cy.contains('h1', 'This mouse loves traveling and exploring the world')
  })
})

describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})
