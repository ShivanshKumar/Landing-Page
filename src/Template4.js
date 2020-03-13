import React from 'react';
import Circle from './Circle.js'
import './Template4.css'
const Template4 = ()=>{
	return(
		<div id = 't4'>
			<p id = 'count'>
				<h1>
					Over 500+ Completed<br/>Work And Still Counting
				</h1>
				<br/>
					<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
					<br/>eiusmod tempor quis nostrud exercitation ullamco laboris nisi 
					<br/>ut aliquip ex ea commodo consequat.Duis aute irure dolor
					<br/><br/>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					<br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
					</span>
			</p>
			<div id = 'ach'>
				<span id = 'achf'>
					<Circle num = {250} text = 'Satisfied Clients'/>
					<Circle num = {300} text = 'Project Done'/>					
				</span>
			
				<span id ='achs'>
					<Circle num = {5} text = 'Years Experience'/>
					<Circle num = {200} text = 'Active Projects'/>
				</span>
			</div>
		</div>);
}

export default Template4;