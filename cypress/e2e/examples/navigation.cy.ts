context('Navigation', () => {
  it('can visit percy', () => {
    cy.visit('https://percy.io')
    cy.percySnapshot('home page', {widths: [1024, 1280, 1920]})
  })
})
