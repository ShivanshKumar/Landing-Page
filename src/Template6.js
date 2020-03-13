import React from 'react';
import PriceCard from './PriceCard.js';
import './Template6.css';
import Dess from './Dess.png';
import Oks from './Oks.png';
import Crown from './Crown.png';
const Template6 = ()=>{
	return(
		<React.Fragment>
			<hr id = 'hr1'/>
			<div id = 't6'>

				<div id = 'aff'>
					<h1>Affordable Price</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
						<br/>Mattis enim ut tellus elementum sagittis vitae et					
					</p>
					<br/>
				</div>

				<div id = 'pcl'>
    				<PriceCard title = 'Basic' price= '$75' img = {Dess}/>	
    				<PriceCard title = 'Standard' price= '$255' img = {Oks}/>
    				<PriceCard title = 'Premium' price= '$850' img = {Crown}/>			
    			</div>
    			<br/>
    			<br/>
			</div>
		</React.Fragment>
		);
}

export default Template6;