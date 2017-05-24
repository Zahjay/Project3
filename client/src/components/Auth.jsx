import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Auth extends Component {
	render() {
		return(
			<div className="authentication">
				<ul className="btn_list">
					<li className="btn"><Link to="/signup">Signup</Link></li>
					<li className="btn"><Link to="/login">Login</Link></li>
				</ul>
			</div>
		)
	}
}

export default Auth;