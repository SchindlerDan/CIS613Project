//Triangle calculator example from class

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function TriangleCalculator() {


	let history = useHistory();
	let [A, setA] = useState();
	let [B, setB] = useState();
	let [C, setC] = useState();
	let [triangle, setTriangle] = useState(false);
	let [calculated, setCalculated] = useState(false);

    let [result, setResult] = useState("ERROR");

	function back() {
		history.goBack();
	}

	
	
	function changeA(event) {
		setA(event.target.value);
	}

	function changeB(event) {
		setB(event.target.value);
	}

	function changeC(event) {
		setC(event.target.value);
	}

	function calculate(  ){
		let a = parseInt(A);
		let b = parseInt(B);
		let c = parseInt(C);
		let output = "";
		let sortedList = [a, b, c];

		
        if(!((a + b > c) && (a + c > b) && (b + c > a))){
			

			output = "Not a Triangle"
			setResult(output);
			setCalculated(true)
			return;
		}


		if (a == b && b == c) {
			output = "Equilateral";
			setTriangle(true);

		} else if (a == b || b == c || c == a) {
			output = "Isosceles";
			setTriangle(true);


		} else {
			output = "Scalene";
			setTriangle(true);


		} 
		sortedList = sortedList.sort((first, second) =>  second - first);


		if (Math.pow(sortedList[1], 2) + Math.pow(sortedList[2], 2) === Math.pow(sortedList[0], 2)) {
			output = output + " Right"

		}
			output = output + " Triangle"
		setResult(output);
		setCalculated(true)

	}


		return (
			<div>
				<p>Please Enter the three lengths of triangle as integers:</p>
				<div>
					<textarea class="A" value={A} onChange={changeA} />
					<textarea class="B" value={B} onChange={changeB} />
					<textarea class="C" value={C} onChange={changeC} />
				</div>
				<div>
					{
						calculated && <div>
							<h2 class="ResultDeclaration">The values you entered resulted in:</h2>
							<h3 class="ResultPrintout"> {result}</h3>

							</div>
						

					}
				</div>
					
				<div>
					<button class="CalculateButton" onClick={calculate}>Calculate Triangle</button>
					<button class="BackButton" onClick={back}>Back</button>
				</div>
			</div>
		);


	}


	export default TriangleCalculator