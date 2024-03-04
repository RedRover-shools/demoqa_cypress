///<reference types="cypress" />


describe("Test suit Authorisation", ()=> {
    const BASE_URL = 'https://demoqa.com/swagger/';
    let token, expires;
    const nameOfUser = "Roman";
    const userPassword = "@Qwery@2";

    it('post authorised', ()=> {
        cy.request({
            method: "POST",
            url: `${BASE_URL}/Account/v1/Authorized`,
            headers: {

            },
            body: {
                userName: nameOfUser,
                password: userPassword
            },       
        })
    
        .then((responce) => {
            expect(responce.status).to.be.eql(200);
            expect(responce.statusText).to.be.eql("OK");
            token=responce.body.token;
           
        })

    })

    it.skip('post token authorised', ()=> {
        cy.request({
            method: "POST",
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body: {
                userName: nameOfUser,
                password: userPassword
            },       
        })
    
        .then((response) => {
            expect(response.status).to.be.eql(200); 
            token = response.body.token;
            expires = response.body.expires;
            console.log({token,  expires})

        })

    })

    it.skip('books', ()=> {
        cy.setCookie('userName', nameOfUser);
        cy.setCookie('token', token);
        cy.setCookie("expires", expires);
        cy.visit('https://demoqa.com/books');
    })
})


