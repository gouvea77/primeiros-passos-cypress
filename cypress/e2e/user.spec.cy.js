import userData from "../fixtures/user-data.json"

describe('Orange HRM Tests', () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstName: "[name='firstName']",
    middleName: "[name='middleName']",
    lastName: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    saveButton: ".oxd-button--secondary[data-v-6653c066=''][type='submit']"
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location("pathname").should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstName).clear().type("Gabriel")
    cy.get(selectorList.middleName).clear()
    cy.get(selectorList.lastName).clear().type("Gouvea")
    cy.get(selectorList.genericField).eq(3).clear().type("256804")
    cy.get(selectorList.genericField).eq(4).clear().type("77")
    cy.get(selectorList.genericField).eq(5).clear().type("DriveLicense29")
    cy.get(selectorList.dateField).eq(0).clear().type("2025-13-04")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.dateField).eq(1).clear().type("2025-13-04")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.saveButton).click()
    cy.get("body").should("contain", "Successfully Updated")
  })
  it('Login - Failed', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert) 
  })
})

