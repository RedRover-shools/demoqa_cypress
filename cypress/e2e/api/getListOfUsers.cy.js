/// <reference types = "cypress"/>

describe('Test suit', ()=> {
    const  BASE_URL = 'https://reqres.in/api';
//GET
    it('test get user status', () => {
        cy.api(`${BASE_URL}/users?page=2`)
            .its('status')
            .should('be.eq', 200)

    })
    it.skip('test get user statusText', () => {
        cy.api(`${BASE_URL}/users?page=2`)
            .its('statusText')
            .should('be.eq', 'OK')

    })

    it.skip('test get user isOkStatusCode', () => {
        cy.api(`${BASE_URL}/users?page=2`)
            .its('isOkStatusCode')
            .should('be.eq', true)

    })

    it.skip('test get user', () => {
        cy.api(`${BASE_URL}/users?page=2`)
            .its('body')
            .then(responce => {
                console.log(responce.data)
                expect(responce).to.have.any.keys('data')
                expect(responce.data).to.be.an('array')
            })

    })

//POST

    it.skip('test get user', () => {
        cy.api({
            method: "POST",
            url:`${BASE_URL}/users`,
            body:{
                "name":"wer",
                "job":"tester"
            }
        })

            .its('body')
            .then(responce => {
                console.log(responce.data)
                expect(responce).to.have.any.keys('name')
                expect(responce).to.be.an('object')
            })
    })


})