import React from 'react'
import Logo from './Logo.png'
import './NavBar.css'
import Button from './Button.js'
const NavBar = ()=>{
	return (
			<ul>
				<li><img className = 'nav logo' alt= 'prob' src = {Logo}/></li>
				<li className = 'nav'>
					<ul className = 'sec'>
						<li>Home</li>
						<li>About Us</li>
						<li>Service</li>
						<li>Portfolio</li>
						<li>Blog</li>
						<li>Contact</li>
						<li id = 'navb'><Button value = 'HIRE US'/></li>	
					</ul>
				</li>
			</ul>

);
}

export default NavBar;