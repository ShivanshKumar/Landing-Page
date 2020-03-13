import React from 'react';
import Customizable from './Customizable.js';
import './Template5.css'

const Template5 = ({img,imgC,imgO})=>{
	return(	<div id = 't5'>
				<div id = 'cus'>
					<span id = 'cus1'>
	    				<Customizable title = 'Customizable' imgC = {imgC} imgO = {imgO} img = {img}/>
	    				<Customizable title = 'Customizable' imgC = {imgC} imgO = {imgO} img = {img}/>
					</span>
					<br/>
					<br/>
					<span id ='cus2'>
	    				<Customizable title = 'Customizable' imgC = {imgC} imgO = {imgO} img = {img}/>
	    				<Customizable title = 'Customizable' imgC = {imgC} imgO = {imgO} img = {img}/>
					</span>
				</div>

				<div id = 'never'>
					<span>
						<hr/>
						<h3>Feature You Never Seen Before</h3>
					</span>
					<br/>
					<h1>You Will Be Able To Choose<br/>Where You Want</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						<br/>eiusmod tempor quis nostrud exercitation ullamco laboris nisi
					</p>
					<br/>
					<span>
						<hr/>
						<h3>Feature You Never Seen Before</h3>
					</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						<br/>eiusmod tempor quis nostrud exercitation ullamco laboris nisi
					</p>
				</div>

			</div>
			);
}

export default Template5;