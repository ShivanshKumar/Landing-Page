import React from 'react';
import './Template2.css'
import CardList from './CardList.js'
import {allCards} from './allCards.js';
const Template2 = ()=>{
	return(
		<React.Fragment>
		<br/>
		<br/>
		<br/>
		<p id = 't2'><h2 id = 'ser'>Additional Service Freelancing</h2><span id ='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></p>
		<br/>
		<br/>
		<CardList allCards = {allCards} />
		</React.Fragment>);
}

export default Template2;