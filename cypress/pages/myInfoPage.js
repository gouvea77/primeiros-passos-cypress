class myInfoPage {
 selectorList() {
    const selectors = {
      wrongCredentialAlert: "[role='alert']",
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      firstNameField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
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

  fillName(firstName, lastNameField ){
    cy.get(this.selectorList().firstNameField).clear().type(firstName)
    cy.get(this.selectorList().middleNameField).clear()
    cy.get(this.selectorList().lastNameField).clear().type(lastNameField)

  }

  fillEmployeeDetails(employeeId, otherID, driversLicenseDate, licenseDate, dateOdBirth){
    cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorList().genericField).eq(4).clear().type(otherID)
    cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenseDate)
    cy.get(this.selectorList().dateField).eq(0).clear().type(licenseDate)
    cy.get(this.selectorList().dateCloseButton).click()
    cy.get(this.selectorList().dateField).eq(1).clear().type(dateOdBirth)
    cy.get(this.selectorList().dateCloseButton).click()
  }

  saveForm(){
    cy.get(this.selectorList().saveButton).click()
  }

  fillPersonDetails(nationality, martialStatus, bloodType){
   cy.get(this.selectorList().genericCombobox).eq(0).click().contains(nationality).click()
    cy.get(this.selectorList().genericCombobox).eq(1).click().contains(martialStatus).click({force: true})
    cy.get(this.selectorList().radioOption).eq(0).click()
    cy.get(this.selectorList().genericCombobox).eq(2).click().contains(bloodType).click()
  }
}

export default myInfoPage