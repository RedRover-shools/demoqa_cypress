/// <reference types="cypress" />

import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";

describe('Elements -> Textbox', function( ){
    const homePage =new HomePage();

   it('fill textbox', function () {
    homePage
        .gotoElementsPage()
        .clickGetTexBox()
        .fillUserName(variables.formData.firstName)
        .fillUserEmail(variables.formData.email)
        .fillCurrentAddress(variables.formData.currentAddress)
        .fillPermanentAddress(variables.formData.permanentAddress)
        .clickSubmitForm()
        .getOutput()
        .should("contain", `Name:${variables.formData.firstName}Email:${variables.formData.email}Current Address :${variables.formData.currentAddress}`);
    
   });
  
  });
  