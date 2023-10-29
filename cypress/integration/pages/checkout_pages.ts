export class CheckoutPage {
    icon_shopping_cart = '.shopping_cart_link'
    quantity_cart = '.cart_quantity'
    product_label = '.inventory_item_name'
    product_description = '.inventory_item_desc'
    product_price = '.inventory_item_price'
    btn_checkout = '#checkout'
    input_firstname = '#first-name'
    input_lastname = '#last-name'
    input_postalcode = '#postal-code'
    btn_continue = '#continue'
    checkout_title = '.title'
    btn_finish = '#finish'
    complete_header = '.complete-header'
  
    moveToCart() {
      cy.get(this.icon_shopping_cart).click()
    }
  
    AssertCartPage() {
      cy.contains('Your Cart').should('be.visible')
      cy.get(this.quantity_cart).should('have.text', '1')
      cy.get(this.product_label).should('exist')
      cy.get(this.product_description).should('exist')
      cy.get(this.product_price).should('exist')
      cy.get('.app_logo').click()
    }
  
    Checkout() {
      cy.get('.app_logo').click()
      cy.get(this.btn_checkout).click()
    }
  
    InputFirstName(firstname: string) {
      cy.get(this.input_firstname).type(firstname)
    }
  
    InputLastName(lastname: string) {
      cy.get(this.input_lastname).type(lastname)
    }
  
    InputPostalCode(postalcode: string) {
      cy.get(this.input_postalcode).type(postalcode)
      cy.get('.app_logo').click()
    }
  
    Continue() {
      cy.get(this.btn_continue).click()
    }
    assertInputInformationFail(){
        cy.get('[data-test="error"]').should('be.visible')
    }
  
    AssertCheckoutOverview() {
      cy.get(this.checkout_title).should('have.text', 'Checkout: Overview')
      cy.get(this.quantity_cart).should('exist')
      cy.get(this.product_label).should('exist')
      cy.get(this.product_description).should('exist')
      cy.get(this.product_price).should('exist')
      cy.contains('Payment Information').should('be.visible').and('have.class', 'summary_info_label')
      cy.contains('Shipping Information').should('be.visible').and('have.class', 'summary_info_label')
      cy.contains('Price Total').should('be.visible').and('have.class', 'summary_info_label')
      cy.get('.app_logo').click()
    }
  
    Finish() {
      cy.get(this.btn_finish).click()
    }
  
    AssertOrderConfirmation() {
      cy.get(this.complete_header).should('have.text', 'Thank you for your order!')
      cy.get('.app_logo').click()
    }
  }