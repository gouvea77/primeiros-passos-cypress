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
    myInfo.writeFields()
    menu.accesPerfomancePage()
    menu.accessDashboardPage()
    menu.accessDirectoryPage()
    menu.accessMaintenancePage()
    maintenance.clickCancelButton()
    menu.accessClaimPage()
    menu.accessBuzzPage()
  })
  
  it('Login - Failed', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert) 
  })
})

