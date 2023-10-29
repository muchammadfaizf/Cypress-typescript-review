export class DashboardPage{
    link_jacket = 'Sauce Labs Fleece Jacket'
    btn_addTOcart = '#add-to-cart-sauce-labs-fleece-jacket'
    icon_shopping_cart = '.shopping_cart_link'

    sauceLabsJacket(){
        cy.contains(this.link_jacket).click()
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible') 
    }
    addTOcart(){
        cy.get(this.btn_addTOcart).click()
        cy.get(this.icon_shopping_cart).should('have.text', '1')
        cy.get('.app_logo').click()
    }
}