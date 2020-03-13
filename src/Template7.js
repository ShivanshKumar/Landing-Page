import React from 'react';
import Guys from './Guys.png';
import Button from './Button.js';
import './Template7.css';
const Template7 = ()=>{
	return(
		<div id = 't7'>
			<img alt = 'Guys' src = {Guys}/>
			<div id = 'form'>
				<h1>Get In Touch With Us</h1>
				<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua,
						sed do eiusmod tempor incididunt ut labore et dolore magna.
				</p>
				<br/>
				<span>
					<input type = 'text' placeholder = '  First Name'/>
					<input type = 'text' placeholder = '  Last Name'/>
				</span>
				<br/>
				<input id = 'email' type = 'email' placeholder = 'Email'/>
				<br/>
				<br/>
				<textarea id = 'Message' type = 'text' placeholder = 'Message'/>
				<br/>
				<br/>	
				<Button value = 'Submit'/>			
			</div>
			<br/>
			<br/>
		</div>);
}

export default Template7;