import React from 'react';
import Girl from './Girl.png'
import Side from './Side.png'
import './Template1.css'
import Button from './Button'
const Template1 = ()=>{
	return(
		<React.Fragment>
			<div className = 'a'>
				<img className = 'side' alt ='side'src = {Side}/>
				<img className = 'girl' alt = 'girl'src = {Girl}/>
				<p className = 'para1'>
					<h1>We Are Creative</h1>
					<h1 className = 'Agency'>EzeWev Agency</h1>
					<h3>We are professional freelancer web designer</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
					<span id = 'b1'><Button value = 'HIRE ME'/></span>
				</p>
			</div>
			<span id = 'slide'><button id = 'selected'></button><button></button><button></button></span>
		</React.Fragment>

	);	
}

export default Template1;