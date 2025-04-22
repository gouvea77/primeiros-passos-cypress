class myInfoPage {
 selectorList() {
    const selectors = {
      wrongCredentialAlert: "[role='alert']",
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
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

    return selectors
  }

  accessMyInfoPage(){
    cy.get(this.selectorList().myInfoButton).click()
  }

  // writeFields(username, password){
  //   cy.get(this.selectorList().usernameField).type(username)
  //   cy.get(this.selectorList().passwordField).type(password)
  //   cy.get(this.selectorList().loginButton).click()

  // }
}

export default myInfoPage