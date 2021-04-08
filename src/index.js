import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router}from 'react-router-dom';
import { useHistory, Route, Switch } from 'react-router-dom';

import TriangleCalculator from './Pages/TriangleCalculator/TriangleCalculator.jsx';
import App from '../src/Pages/Homepage/App.jsx';
import BMICalculator from './Pages/BMICalculator/BMICalculator.jsx';


ReactDOM.render(
<Router>
	<Switch>
		
		<Route path='/TriangleCalculator'>
			<TriangleCalculator/>
		</Route>

		<Route path='/BMICalculator'>
			<BMICalculator/>
		</Route>

		<Route path='/'>
			<App />
		</Route>
	</Switch>
</Router>

, document.getElementById('root'));
