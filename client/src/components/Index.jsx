import React, { Component } from 'react';

//import components
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Auth from './Auth.jsx';

class Index extends Component {
	render() {
		return(
			<div className="index">
				<Header />
				<Nav />
				<Auth />
			</div>
		)
	}
}

export default Index;