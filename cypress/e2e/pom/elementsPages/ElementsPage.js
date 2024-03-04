import TextBoxPage from './TextBoxPage';
import WebTablesPage from './WebTablesPage';
class ElementsPage {
    getTextBox = ()=> cy.get('div.accordion>:first-child .menu-list> :first-child');
    getWebTables = () =>cy.get('.accordion :first-child .menu-list>li#item-3');
  



    clickGetTexBox() {
        this.getTextBox().click();

        return new TextBoxPage();
    }

  

    clickWebTables() {
        this.getWebTables().click();

        return new WebTablesPage();
    }

   



}

export default ElementsPage;