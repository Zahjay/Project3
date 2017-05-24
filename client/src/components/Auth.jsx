import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Link,
  Route,
 
} from 'react-router-dom'

class Auth extends Component {
	render() {
		return(
			<div className="authentication">
				<ul>
					<li><Link to="/signup">Signup</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>
			</div>
		)
	}
}

export default Auth;