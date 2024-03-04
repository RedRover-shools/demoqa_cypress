class AlertsPage {

    getButtonToSeeAlert =() => cy.get("button#alertButton");
    getButtonFiveSecAlert = ()=> cy.get("#timerAlertButton");
    getButtonConfirmBox = () => cy.get("#confirmButton");
    getButtonPromptBox = () => cy.get("#promtButton");


    clickButtonToSeeAlert() {
        this.getButtonToSeeAlert()
            .click();

            return this;
    }

    confirmAlert(message) {
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.eql(message);
        })

        return this;
    }

    clickButtonAllertAfterFiveSec() {
        this.getButtonFiveSecAlert()
            .click();

            return this;
    }

    confirmAlertWait(message) {
        cy.on('window:alert',(t)=>{
            cy.wait(6000)
            //assertions
            expect(t).to.eql(message);
        })

        return this;
    }

    confirmBoxApear() {
        this.getButtonConfirmBox()
            .click();
            cy.wait(3000);
            cy.on('window:confirm', (str) => {
                count += 1
            
                switch (count) {
                  case 1:
                    expect(str).to.eq('first confirm')
                    expect(str).to.eq('OK')
            
                  // returning nothing here automatically
                  // accepts the confirmation
                  case 2:
                    expect(str).to.eq('second confirm')
                          
                    // reject the confirmation
                    return false

                }
            })
            

            return this;
    }

  
   




}
export default AlertsPage;