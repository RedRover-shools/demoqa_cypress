import AlertsPage from "./AlertsPage";
import BrowserWindowsPage from "./BrowserWindowsPage";

class AlertsFramesWindowsPage {
    getBrowserWindow =() => cy.get('div.accordion :first-child +.element-group +div>div>ul> :first-child');
    getAlertsPage =() => cy.get('div.accordion :first-child +.element-group +div>div>ul> :first-child+li');


    gotoBrowserWindowPage() {
        this.getBrowserWindow().click();

        return new BrowserWindowsPage();
    }

    gotoAlertsPage() {
        this.getAlertsPage()
            .click();

            return new AlertsPage()

    }


}
export default AlertsFramesWindowsPage;
