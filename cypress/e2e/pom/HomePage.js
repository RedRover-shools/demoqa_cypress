import AlertsFramesWindowsPage from "./alertsFramesWindowsPage/AlertsFramesWindowsPage";
import BrowserWindowsPage from "./alertsFramesWindowsPage/BrowserWindowsPage";
import ElementsPage from "./elementsPages/ElementsPage";


class HomePage  {
   getElements = () =>  cy.get('div.home-body>.category-cards> :first-child.card');
   getAlertsFramesWindows = () => cy.get('div.home-body>.category-cards> :first-child.card+.card+.card');

 
  

   gotoElementsPage() {
    this.getElements().click();

    return new ElementsPage();
   }

   visitHomePage() {
       cy.visit('https://demoqa.com/');   
       
       return this; 
    }

    
    gotoAllertsFramesWindows() {
        this.getAlertsFramesWindows()
            .click();

            return new AlertsFramesWindowsPage();
    }

    
}
export default HomePage;