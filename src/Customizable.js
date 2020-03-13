import React from 'react';
import './Customizable.css';
const Customizable = ({imgC, img, title,imgO})=>{
	return(
			<div id = 'custom'  onMouseOver = {imgC} onMouseOut = {imgO}>
					<img id = 'pic2' alt = {title} src = {img}/>
					<h3>{title}</h3>
					<br/>
					<span id = 'cdetail2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/></span>
			</div>
		);
}

export default Customizable;