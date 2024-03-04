/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";

describe('Elements -> Web Tables', function() {
    const homePage = new HomePage(); 
  
    it('add user, search user, delete user', function() {

        homePage
            .gotoElementsPage()
            .clickWebTables()
            .clickAddNewRecord()
            .enterFirstName(variables.formData.firstName)
            .enterLastName(variables.formData.lastName)
            .enterEmail(variables.formData.email)
            .enterAge(variables.formData.age)
            .enterSalary(variables.formData.salary)
            .enterDepartment(variables.formData.department)
            .enterSubmit()
            .enterSearchBox(variables.formData.email)
            .searchRowUser(variables.formData.email)
            .clickGetDeleteButton()
            .getAllUser().should('have.value', '')   
    })


})