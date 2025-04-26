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

  writeFields(username, password){
    cy.get(this.selectorList().firstName).clear().type("Gabriel")
    cy.get(this.selectorList().middleName).clear()
    cy.get(this.selectorList().lastName).clear().type("Gouvea")
    cy.get(this.selectorList().genericField).eq(3).clear().type("256804")
    cy.get(this.selectorList().genericField).eq(4).clear().type("77")
    cy.get(this.selectorList().genericField).eq(5).clear().type("DriveLicense29")
    cy.get(this.selectorList().dateField).eq(0).clear().type("2025-13-04")
    cy.get(this.selectorList().dateCloseButton).click()
    cy.get(this.selectorList().dateField).eq(1).clear().type("2025-13-04")
    cy.get(this.selectorList().dateCloseButton).click()
    cy.get(this.selectorList().saveButton).click()
    cy.get(this.selectorList().genericCombobox).eq(0).click().contains("Brazilian").click()
    cy.get(this.selectorList().genericCombobox).eq(1).click().contains("Single").click({force: true})
    cy.get(this.selectorList().radioOption).eq(0).click()
    cy.get(this.selectorList().genericCombobox).eq(2).click().contains("B+").click()

  }
}

export default myInfoPage