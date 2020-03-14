import React from 'react';
import Button from './Button.js';
import './PriceCard.css'
const PriceCard = ({img, title,price})=>{
	return(
		<div id = 'pcard'>
			<img alt = 'img' src = {img}/>
			<h2>{title}</h2>
			<ul id = 'listed'>
				<li>Graphic Design</li>
				<li>Web Design</li>
				<li>Ui/Ux Design</li>
				<li>HTML/CSS</li>
				<li>SEO Marketing</li>
				<li>Video Animation</li>
			</ul>
			<span>
			<h1>{price}</h1>
			<h3>/month</h3>
			</span>
			<Button value = 'START NOW'/>
			<br/>
			<br/>
		</div>
		);
}

export default PriceCard;