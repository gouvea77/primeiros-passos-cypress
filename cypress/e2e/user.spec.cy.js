import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import menuPage from "../pages/menuPage.js"
import maintenancePage from "../pages/maintanancePage.js"
import myInfoPage from "../pages/myInfoPage.js"

const login = new LoginPage()
const dashboard = new DashboardPage()
const menu = new menuPage()
const maintenance = new maintenancePage()
const myInfo = new myInfoPage()

describe('Orange HRM Tests', () => {
  const selectorList = {
    
    firstName: "[name='firstName']",
    middleName: "[name='middleName']",
    lastName: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    saveButton: ".oxd-button--secondary[data-v-6653c066=''][type='submit']",
    genericCombobox: ".oxd-select-wrapper",
    radioOption: ".oxd-radio-wrapper"
  }

  it.only('User Info Update - Success', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.checkDashboardPage()
    menu.accessAdminPage()
    menu.accessPimPage()
    menu.accessLeavePage()
    menu.accessTimePage()
    menu.accessRecruitmentPage()
    menu.accessMyInfoPage()
    menu.accesPerfomancePage()
    menu.accessDashboardPage()
    menu.accessDirectoryPage()
    menu.accessMaintenancePage()
    maintenance.clickCancelButton()
    menu.accessClaimPage()
    menu.accessBuzzPage()

    // myInfo.writeFields()
    // cy.get(selectorList.myInfoButton).click()
    // cy.get(selectorList.firstName).clear().type("Gabriel")
    // cy.get(selectorList.middleName).clear()
    // cy.get(selectorList.lastName).clear().type("Gouvea")
    // cy.get(selectorList.genericField).eq(3).clear().type("256804")
    // cy.get(selectorList.genericField).eq(4).clear().type("77")
    // cy.get(selectorList.genericField).eq(5).clear().type("DriveLicense29")
    // cy.get(selectorList.dateField).eq(0).clear().type("2025-13-04")
    // cy.get(selectorList.dateCloseButton).click()
    // cy.get(selectorList.dateField).eq(1).clear().type("2025-13-04")
    // cy.get(selectorList.dateCloseButton).click()
    // cy.get(selectorList.saveButton).click()
    // cy.get(selectorList.genericCombobox).eq(0).click().contains("Brazilian").click()
    // cy.get(selectorList.genericCombobox).eq(1).click().contains("Single").click({force: true})
    // cy.get(selectorList.radioOption).eq(0).click()
    // cy.get(selectorList.genericCombobox).eq(2).click().contains("B+").click()
  })
  it('Login - Failed', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert) 
  })
})

