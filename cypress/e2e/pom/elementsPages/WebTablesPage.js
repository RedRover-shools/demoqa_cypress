
class WebTablesPage {
    
   getAddNewReccord = ()=> cy.get('#addNewRecordButton');
   getFirstName = ()=> cy.get('#firstName');
   getLastName = () => cy.get('#lastName');
   getEmail =() => cy.get('#userEmail');
   getAge =() => cy.get('#age');
   getSalary =() => cy.get('#salary');
   getDepartment =() => cy.get('#department');
   getSubmitButton = () => cy.get('#submit');
   getSearchBox = () =>  cy.get('#searchBox');
   getRowUser = (firstName)=> cy.xpath('//div[@class="rt-td"]').contains(firstName);
   getAllUser = (firstName)=> cy.xpath('//div[@class="rt-td"]');
   getDeleteButton = () => cy.get('div.action-buttons>:last-child');
   
  
        clickAddNewRecord() {
            this.getAddNewReccord().click();
            
            return this;
        }

        enterFirstName(firstName) {
            this.getFirstName()
                .clear()
                .type(firstName)
                .should('have.value', firstName)
                
             return this;
        }

        enterLastName(lastName) {
            this.getLastName()
                .clear()
                .type(lastName)
                .should('have.value', lastName)
                
             return this;
        }

        enterEmail(email) {
            this.getEmail()
                .clear()
                .type(email)
                .should('have.value', email)
                
             return this;
        }

        enterAge(age) {
            this.getAge(age)
                .clear()
                .type(age)
                .should('have.value', age)
                
             return this;
        }

        enterSalary(salary) {
            this.getSalary()
                .clear()
                .type(salary)
                .should('have.value', salary)
                
             return this;
        }

        enterDepartment(department) {
            this.getDepartment()
                .clear()
                .type(department)
                .should('have.value', department)
                
             return this;
        }

        enterSubmit() {
            this.getSubmitButton().click();

            return this;
        }

        enterSearchBox(name) {
            this.getSearchBox()
                .type(name)
                .should('have.value', name);

                return this;
        }

        searchRowUser(firstName) {
            this.getRowUser(firstName)
            .should('have.text', firstName)

            return this;
        }

        clickGetDeleteButton() {
            this.getDeleteButton().click();

            return this;
        }

        
}

export default  WebTablesPage;