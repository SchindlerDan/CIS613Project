//Should have text entry options for age, weight, and height. A "submit" button for locking in values will provide BMI results.
//BMI Details: https://www.diabetes.ca/managing-my-diabetes/tools---resources/body-mass-index-(bmi)-calculator
//Metric: KG/M^2 
//Imperial: (lbs/inches^2) * 703
// normal range: 18.5 <=> 24.9
//sleep code taken from: https://www.sitepoint.com/delay-sleep-pause-wait/

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';




function bmiCalculator() {



	let history = useHistory();

	let [weight, setWeight] = useState();
	let [height, setHeight] = useState();
	let [useMetric, setMetric] = useState(true);
	let [value, setValue] = useState(0);
	let [result, setResult] = useState("");
	let [loading, setLoading] = useState(false);

	function back() {
		history.goBack();
	}

	function calculate() {

		function sleep(milliseconds) {
			const date = Date.now();
			let currentDate = null;
			do {
				currentDate = Date.now();
			} while (currentDate - date < milliseconds);
		}


		let localValue = weight / (height * height)
		if (!useMetric) {
			localValue = (localValue * 703);
		}


		setValue(localValue.toFixed(1));

		if (localValue > 24.9) {
			setResult("Overweight");
		} else if (localValue < 18.5) {
			setResult("Underweight");
		} else {
			setResult("Healthy");
		}

		sleep(Math.random(3) * 1000)

		
	}

	function toggle() {
		setMetric(!useMetric);
	}

	function reset() {
		setHeight(0);
		setWeight(0);
		setValue(0);
		setMetric(true);
		setResult("");
	}

	function changeWeight(event) {
		setWeight(event.target.value);
	}

	function changeHeight(event) {
		setHeight(event.target.value);
	}


	return (
		<div>
			<div style={{
				position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)'
    
			}}>
				<div>
					<h2>Weight:</h2>
					<textarea class="weight" value={weight} onChange={changeWeight} />
					<h2>Height</h2>
					<textarea class="height" value={height} onChange={changeHeight} />
				</div>
				{
					result !== "" && <div>
						<h2>Result:</h2>
						<h2 class="numericalResult">Your BMI score is: {value}</h2>
						<h2 class="ResultPrintout"> This means you are: {result}</h2>


					</div>

				}
				<div>
					{useMetric && <button class="ToggleButton" onClick={toggle} >Toggle: Metric (kg and m)</button>}
					{!useMetric && <button class="ToggleButton" onClick={toggle}>Toggle: Imperial (lbs and in)</button>}
				</div>
				{loading && <h3>Loading...</h3>}
				<div>
					{parseFloat(value) !== 0 && <button class="ResetButton" onClick={reset}>Reset Calculator</button>}
					<button class="CalculateButton" onClick={calculate} variant="contained" color="primary">Calculate BMI</button>
					<button class="BackButton" onClick={back} variant="contained" color="primary">Back</button>
				</div>
			</div>
		</div>
	);
}



export default bmiCalculator;