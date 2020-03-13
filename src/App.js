import React from 'react';
import './App.css';
import NavBar from './NavBar.js'
import Template1 from './Template1.js'
import Template2 from './Template2.js'
import Template3 from './Template3.js'
import Template4 from './Template4.js'
import Template5 from './Template5.js'
import Template6 from './Template6.js'
import Template7 from './Template7.js'
import Template8 from './Template8.js'
import Middle from './Middle.js'
import Customizable from './Customizable.js'

import Custom from './Custom.png';
import CustomHover from './CustomHover.png'

class App extends React.Component {
  constructor(){
  	super();
  	this.state = {
  		img: Custom
  	}
	// console.log(this.state.img);

  }

OnHover = ()=>{
	this.setState({img: CustomHover});
}
OnOut = ()=>{
	this.setState({img: Custom});
}
  render(){
    return(
    	<React.Fragment>
    	<NavBar/>
    	<br/>
    	<Template1/>
    	<Template2/>
    	<Template3/>
    	<Template4/>
    	<Middle/>
    	<Template5 imgC = {this.OnHover} imgO = {this.OnOut} img = {this.state.img}/>
    	<Template6/>
    	<Template7/>
    	<Template8/>
    	</React.Fragment>
    	);
  }
}

export default App;

