class maintenancePage {
  selectorList() {
     const selectors = {
      cancelButton: "[type='button']",
     }
 
     return selectors
   }
 
   clickCancelButton(){
     cy.get(this.selectorList().cancelButton).click()
   }
 
   // writeFields(username, password){
   //   cy.get(this.selectorList().usernameField).type(username)
   //   cy.get(this.selectorList().passwordField).type(password)
   //   cy.get(this.selectorList().loginButton).click()
 
   // }
 }
 
 export default maintenancePage