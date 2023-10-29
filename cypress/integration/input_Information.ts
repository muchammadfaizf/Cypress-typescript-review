import { LoginPage } from "./pages/login_pages"
import { DashboardPage } from "./pages/dashboard_pages"
import { CheckoutPage } from "./pages/checkout_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('Test (Positive) Checkout', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce')
  loginPage.assertLogin()
  dashboardPage.sauceLabsJacket()
  dashboardPage.addTOcart()
  checkoutPage.moveToCart()
  checkoutPage.AssertCartPage()
  checkoutPage.Checkout()
  checkoutPage.InputFirstName('Jasmine')
  checkoutPage.InputLastName('Khol')
  checkoutPage.InputPostalCode('14150')
  checkoutPage.Continue()
  checkoutPage.AssertCheckoutOverview()
  checkoutPage.Finish()
  checkoutPage.AssertOrderConfirmation()
})
it('Test (Negative) Checkout', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsJacket()
    dashboardPage.addTOcart()
    checkoutPage.moveToCart()
    checkoutPage.AssertCartPage()
    checkoutPage.Checkout()
    checkoutPage.Continue()
    checkoutPage.assertInputInformationFail()
  })
