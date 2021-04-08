

describe('Navigation and history Tests', () => {

	it('Cypress saves test history and allows time travel', ()=> {
		cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("9");
	cy.get('.B').type("41");

	cy.get('.C').type("40");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Scalene Right Triangle');
	cy.get('.BackButton').click();
	cy.get('.BMICalculator').click();
	cy.get('.ToggleButton').click();
	cy.get('.ToggleButton').click();
	cy.get('.ToggleButton').click();
	cy.get('.weight').type("140");
	cy.get('.height').type("68");
	cy.get('.CalculateButton').click();
	cy.get('.numericalResult').should('have.text', 'Your BMI score is: 21.3');
	cy.get('.ResultPrintout').should('have.text', ' This means you are: Healthy');
	cy.get('.BackButton').click();
	cy.url().should('eq', 'http://localhost:3000/');

	})
	


})