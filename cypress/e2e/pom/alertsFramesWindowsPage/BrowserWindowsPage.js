class BrowserWindowsPage {
    getNewTab = () => cy.get('#tabButton');
   
    getNewWindow =() => cy.get('#windowButton');
    getWindowMessage =() => cy.get('#messageWindowButton');

 


    checkOpenNewPage() {
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://demoqa.com/sample';
            }).as("popup")})
        this.getNewTab()
            .click();

        cy.get('@popup')
            .should("be.called")
        cy.url()
            .should('include', '/sample')

        
            return this;
    }


    gotoNewWindow() {
        this.getNewWindow()
            .click();

            return this;
    }


    openWindowMessage() {
        this.getWindowMessage()
            .click();

            return this;

    }
    checkWindowMessage() {
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'about:blank';
            }).as("popup")})
        this.getNewTab()
            .click();

        cy.get('@popup')
            .should("be.called")
     

        
            return this;
    }


}
export default BrowserWindowsPage;