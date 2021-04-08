
describe('BMI Tests', () => {


	it('Base example my height/weight in Metric', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.BMICalculator').click();
		cy.get('.weight').type("63.5");
		cy.get('.height').type("1.73");
		cy.get('.CalculateButton').click();
	})
})