describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a.product-1').first().click()

    cy.url().should('include', '/product')

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should display only one product in the cart after one clicking the button', () => {
    cy.get('a.product-1').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to add product to search for a product and add it ti the cart', () => {
    cy.searchbByQuery('moletom')

    cy.get('a.product').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
