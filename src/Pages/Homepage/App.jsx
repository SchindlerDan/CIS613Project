import React, {useState} from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';

 function App(){
	const [name, setName] = useState("Please replace this text with your name");

	let history = useHistory();

  function triangleClick() {
    history.push('/TriangleCalculator');
  }

  function bmiClick(){
	  history.push('/BMICalculator');
  }


		return(
			<div
				 style={{
				position: 'absolute', left: '50%', top: '30%',
        		transform: 'translate(-50%, -50%)'
    
			}}
			>
			<div>
				<h2>Triangle Test:</h2>

				<button class="TriangleCalculator" onClick={triangleClick} >
					Triangle Calculator
				</button>
			</div>
			<div>
				<h2>BMI Calculator:</h2>

				<button class="BMICalculator" onClick={bmiClick}>
					BMI Calculator
				</button>
			</div>
				
				
			</div>
		);
		

	}

export default App