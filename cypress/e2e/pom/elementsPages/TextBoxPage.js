
class TextBoxPage {
    getUsertName = ()=> cy.get('input[id="userName"]');
    getUserEmail = ()=> cy.get('input[id="userEmail"]');
    getCurrentAddres = ()=> cy.get('#currentAddress');
    getPermanentAddress = ()=> cy.get('#permanentAddress');
    getSubmitButton = () => cy.get('#submit');
    getOutput=() => cy.get('div#output');

    
    fillUserName(name) {
        this.getUsertName().clear();
        this.getUsertName().type(name);
    

        return this;
    }

    fillUserEmail(email) {
        this.getUserEmail().clear();
        this.getUserEmail().type(email);

        return this;
    }

    fillCurrentAddress(currentAddress) {
        this.getCurrentAddres().clear();
        this.getCurrentAddres().type(currentAddress);

        return this;
    }

    fillPermanentAddress(permanentAddress) {
        this.getPermanentAddress().clear();
        this.getPermanentAddress().type(permanentAddress)

        return this;
    }

    clickSubmitForm() {
        this.getSubmitButton().click();

        return this;
    } 

}

export default TextBoxPage;