import React from 'react'
import Button from './Button.js'
import Man from './Man.png'
import './Template3.css'
const Template3 = ()=>{
	return(
		<div id ='t3'>
			<br/>
			<img id = 'Man'alt = 'Man' src = {Man}/>
			<p id = 'why'><h1>Why You Hire Us?</h1>
				<br/>
				<span id = 'ex'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
					<br/>eiusmod tempor quis nostrud exercitation ullamco laboris nisi 
					<br/>ut aliquip ex ea commodo consequat.Duis aute irure dolor
					<br/><br/>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					<br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
				</span>
				<br/>
				<br/>
				<Button value = 'HIRE ME'/>
			</p>
		</div>
		);
}

export default Template3;