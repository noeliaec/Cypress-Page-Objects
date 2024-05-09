import homePage from "../pages/homePage"
  
 describe("POM implementation", () => {

  beforeEach (() => {
    cy.visit(Cypress.env("url"))

  })

  it("Login", () => {
    homePage.typeUsername('standard_user');
    homePage.typePassword('secret_sauce');
    homePage.clickLogin();
    homePage.verifyLogin();
  
  })
   
 });