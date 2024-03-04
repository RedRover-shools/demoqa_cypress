/// <reference types ="cypress" />

describe('Test suit SmokeTests', function() {

    it('tes1 smoke',{tags: '@smoke'}, ()=> {
        cy.visit('https://demoqa.com');
        console.log('Test1 smoke');
    })
    it('tes2', function() {
        cy.visit('https://demoqa.com');
        console.log('Test2 smoke');
    })
    it('tes3', function() {
        cy.visit('https://demoqa.com');
        console.log('Test3 smoke');
    })
    
})  