import React from 'react';
import Write from './Write.png';
import './Circle.css';
const Circle = ({num,text})=>{
	return(
		<div id = 'circle'>
			<br/>
			<img id = 'write' alt = 'Write' src = {Write}/>
			<h2 id = 'num'>{num}</h2>
			<h4>{text}</h4>
			<br/>
		</div>);
}

export default Circle;