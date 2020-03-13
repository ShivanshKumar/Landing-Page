import React from 'react';
import Arrow from './Arrow.png';
import './Card.css'
const Card = ({img, title})=>{
	return(
			<div id = 'card'>
					<img id = 'pic' alt = {title} src = {img}/>
					<h3>{title}</h3>
					<br/>
					<span id = 'cdetail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/></span>
					<h4  id = 'contact' >Contact Us <img alt = 'Arrow' src = {Arrow}/> </h4>
			</div>
		);
}

export default Card;