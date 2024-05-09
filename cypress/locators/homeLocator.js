class HomeLocators {
  elements = {
    
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.get('#login-button'),
    errorMessage: () => cy.get('he[data-test="error"]'),
    titlePage: () => cy.get('.app_logo'),
  }
}

module.exports = new HomeLocators();