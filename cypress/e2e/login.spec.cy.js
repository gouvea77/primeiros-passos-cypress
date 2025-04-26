import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage.js"

const login = new LoginPage()


 


describe('Orange HRM Tests', () => {

  it('Login - Failed', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.userFail.username, userData.userFail.password)
    login.checAccessInvalid()
  })

  it('Login - Success', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  })
})