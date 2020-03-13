import React from 'react';
import Card from './Card.js';
import './CardList.css'
const CardList = ({allCards})=>{
	return(
		<div id = 'cardlist'>

		{	
			allCards.map( (card)=>
			{
				return(<Card img = {card.img} title = {card.title}/> )
			})
		}
		</div>
		);
} 

export default CardList;