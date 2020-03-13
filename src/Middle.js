import React from 'react';
import Logo from './Logo.png';
import Envato from './Envato.png';
import './Middle.css';

const Middle = ()=>{
	return(
		<div id = 'mid'>
			<br/>
			<br/>
			<h2>We Are Featured In</h2>
			<span>
				<img alt = 'logo' src = {Logo}/>
				<img alt = 'Envato' src = {Envato}/>
				<img alt = 'logo' src = {Logo}/>
				<img alt = 'Envato' src = {Envato}/>
				<img alt = 'logo' src = {Logo}/>
			</span>
			<br/>
			<br/>
			<br/>
		</div>);
}

export default Middle;