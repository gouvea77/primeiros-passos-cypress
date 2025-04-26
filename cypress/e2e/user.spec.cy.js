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

const Chance = require('chance');
const chance = new Chance();

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.checkDashboardPage()
    // menu.accessAdminPage()
    // menu.accessPimPage()
    // menu.accessLeavePage()
    // menu.accessTimePage()
    // menu.accessRecruitmentPage()
    menu.accessMyInfoPage()
    myInfo.fillName( chance.first(), chance.last())
    myInfo.fillEmployeeDetails("29", "otherID", "77", "1995-28-09", "1995-28-09")
    myInfo.fillPersonDetails("Brazilian", "Married", "O+")
    myInfo.saveForm()

    // menu.accesPerfomancePage()
    // menu.accessDashboardPage()
    // menu.accessDirectoryPage()
    // menu.accessMaintenancePage()
    // maintenance.clickCancelButton()
    // menu.accessClaimPage()
    // menu.accessBuzzPage()
  })
})

