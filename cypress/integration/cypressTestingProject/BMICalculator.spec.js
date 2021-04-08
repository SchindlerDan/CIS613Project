
describe('BMI Tests', () => {


	it('Base example my height/weight in Metric', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.BMICalculator').click();
		cy.get('.weight').type("63.5");
		cy.get('.height').type("1.73");
		cy.get('.CalculateButton').click();
		cy.get('.numericalResult').should('have.text', 'Your BMI score is: 21.2');
		cy.get('.ResultPrintout').should('have.text', ' This means you are: Healthy');


	})



	it('Base example my height/weight in Imperial', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.BMICalculator').click();
		cy.get('.ToggleButton').click();
		cy.get('.weight').type("140");
		cy.get('.height').type("68");
		cy.get('.CalculateButton').click();
		cy.get('.numericalResult').should('have.text', 'Your BMI score is: 21.3');
		cy.get('.ResultPrintout').should('have.text', ' This means you are: Healthy');
	})





	it('Overweight in Metric', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.BMICalculator').click();
		cy.get('.weight').type("75.5");
		cy.get('.height').type("1.73");
		cy.get('.CalculateButton').click();
		cy.get('.numericalResult').should('have.text', 'Your BMI score is: 25.2');
		cy.get('.ResultPrintout').should('have.text', ' This means you are: Overweight');


	})


	it('Overweight in Imperial', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.BMICalculator').click();
		cy.get('.ToggleButton').click();
		cy.get('.weight').type("170");
		cy.get('.height').type("68");
		cy.get('.CalculateButton').click();
		cy.get('.numericalResult').should('have.text', 'Your BMI score is: 25.8');
		cy.get('.ResultPrintout').should('have.text', ' This means you are: Overweight');
	})




	it('Underweight in Metric', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.BMICalculator').click();
		cy.get('.weight').type("55");
		cy.get('.height').type("1.73");
		cy.get('.CalculateButton').click();
		cy.get('.numericalResult').should('have.text', 'Your BMI score is: 18.4');
		cy.get('.ResultPrintout').should('have.text', ' This means you are: Underweight');


	})



	it('Underweight in Imperial', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.BMICalculator').click();
		cy.get('.ToggleButton').click();
		cy.get('.weight').type("120");
		cy.get('.height').type("68");
		cy.get('.CalculateButton').click();
		cy.get('.numericalResult').should('have.text', 'Your BMI score is: 18.2');
		cy.get('.ResultPrintout').should('have.text', ' This means you are: Underweight');
	})









})