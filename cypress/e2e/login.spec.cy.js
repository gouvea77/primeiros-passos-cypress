describe('Orange HRM Tests', () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type("Admin")
    cy.get(selectorList.passwordField).type("admin123")
    cy.get(selectorList.loginButton).click()
    cy.location("pathname").should('equal', '/web/index.php/dashboard/index')
  })
  it('Login - Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type("test")
    cy.get(selectorList.passwordField).type("admin123")
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert) 
  })
})