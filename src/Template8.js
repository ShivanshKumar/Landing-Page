import React from 'react';
import LogoDark from './LogoDark.png';
import Social from './Social.png';
import GoogleMapReact from 'google-map-react';
import './Template8.css'
const Template8 = ()=>{
	return(
		<React.Fragment>
			<hr id = 'hr2'/>
			<div id = 't8'>
				<img alt = 'logo' src = {LogoDark}/>
				<br/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					<br/>sed do eiusmod tempor
					incididunt ut labore et magna aliqua.<br/> Mattis enim ut tellus elementum sagittis
					vitae et.Sed turpis tincidunt. 
				</p>
				<br/>
				<img alt = 'Social' src = {Social}/>

				<div id = 'map'>
					      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38704145988!2d90.27923711474392!3d23.780573255513563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sin!4v1584105554305!5m2!1sen!2sin" width={400} height={300} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
				</div>
			</div>
			<div id = 'footer'>
				<span>
					Design by Kawasar
				</span>
				<span>
					Copied by Shivansh Kumar
				</span>
			</div>
		</React.Fragment>

		);
}

export default Template8;