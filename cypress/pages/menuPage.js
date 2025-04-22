class menuPage {
 selectorList() {
    const selectors = {
      adminButton: "[href='/web/index.php/admin/viewAdminModule']",
      pimButton: "[href='/web/index.php/pim/viewPimModule']",
      leaveButton:"[href='/web/index.php/leave/viewLeaveModule']",
      timeButton: "[href='/web/index.php/time/viewTimeModule']",
      recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
      dasboardButton: "[href='/web/index.php/dashboard/index']",
      directoryButton: "[href='/web/index.php/directory/viewDirectory']",
      maintenanceButtton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
      claimButton: "[href='/web/index.php/claim/viewClaimModule']",
      buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
    }
    return selectors
  }

  accessAdminPage(){
    cy.get(this.selectorList().adminButton).click()
  }
  accessPimPage(){
    cy.get(this.selectorList().pimButton).click()
  }
  accessLeavePage(){
    cy.get(this.selectorList().leaveButton).click()
  }
  accessTimePage(){
    cy.get(this.selectorList().timeButton).click()
  }
  accessRecruitmentPage(){
    cy.get(this.selectorList().recruitmentButton).click()
  }
  accessMyInfoPage(){
    cy.get(this.selectorList().myInfoButton).click()
  }
  accesPerfomancePage(){
    cy.get(this.selectorList().performanceButton).click()
  }
  accessDashboardPage(){
    cy.get(this.selectorList().dasboardButton).click()
  }
  accessDirectoryPage(){
    cy.get(this.selectorList().directoryButton).click()
  }
  accessMaintenancePage(){
    cy.get(this.selectorList().maintenanceButtton).click()
  }
  accessClaimPage(){
    cy.get(this.selectorList().claimButton).click()
  }
  accessBuzzPage(){
    cy.get(this.selectorList().buzzButton).click()
  }

}

export default menuPage