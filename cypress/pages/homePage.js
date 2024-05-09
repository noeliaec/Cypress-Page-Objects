const homeLocator = require('../locators/homeLocator');

class HomePage {
  
  typeUsername(username) {
    homeLocator.elements.usernameInput().type(username);
  }

  typePassword(password) {
    homeLocator.elements.passwordInput().type(password);
  }

  clickLogin() {
    homeLocator.elements.loginBtn().click();
  }

  verifyLogin(){
    homeLocator.elements.titlePage().should("be.visible")
  }

}

module.exports = new HomePage();