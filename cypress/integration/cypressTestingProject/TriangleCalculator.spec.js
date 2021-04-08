

describe('Triangle Tests', () => {
	/*
	Weak Normal Boundary Testing
	*/

	it('Base example 50/50/50', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("50");
	cy.get('.B').type("50");

	cy.get('.C').type("50");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Equilateral Triangle');
  })



  it('Large A example 9000000000/50/50', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("9000000000");
	cy.get('.B').type("50");

	cy.get('.C').type("50");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Not a Triangle');
  })


    it('Large B example 50/9000000000/50', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("50");
	cy.get('.B').type("9000000000");

	cy.get('.C').type("50");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Not a Triangle');
  })

    it('Large C example 50/50/9000000000', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("50");
	cy.get('.B').type("50");

	cy.get('.C').type("9000000000");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Not a Triangle');
  })



it('Small A example 1/50/50', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("1");
	cy.get('.B').type("50");

	cy.get('.C').type("50");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Isosceles Triangle');
  })


  
it('Small B example 50/1/50', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("50");
	cy.get('.B').type("1");

	cy.get('.C').type("50");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Isosceles Triangle');
  })


  
it('Small A example 50/50/1', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("50");
	cy.get('.B').type("50");

	cy.get('.C').type("1");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Isosceles Triangle');
  })





	//Equivalence Class Testing

	it('Testing Equilateral Triangle Case', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("50");
	cy.get('.B').type("50");

	cy.get('.C').type("50");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Equilateral Triangle');
  })



	it('Testing Isosceles Triangle Case', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("50");
	cy.get('.B').type("50");

	cy.get('.C').type("1");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Isosceles Triangle');
  })


  it('Testing Scalene Right Triangle Case', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("9");
	cy.get('.B').type("41");

	cy.get('.C').type("40");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Scalene Right Triangle');
  })



 
	it('Testing False Triangle Case', () => {
	cy.visit('http://localhost:3000/');
	cy.get('.TriangleCalculator').click();
	cy.get('.A').type("50");
	cy.get('.B').type("50");

	cy.get('.C').type("1000");
	cy.get('.CalculateButton').click();
	cy.get('.ResultPrintout').should('have.text', ' Not a Triangle');
  })





})