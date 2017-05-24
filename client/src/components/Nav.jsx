import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Link,
  Route,
 
} from 'react-router-dom'

class Nav extends Component {
	render() {
		return(
			<nav>
				<ul>
					<li><Link to="/brooklyn">Brooklyn</Link></li>
					<li><Link to="/manhattan">Manhattan</Link></li>
					<li><Link to="/queens">Queens</Link></li>
					<li><Link to="/bronx">Bronx</Link></li>
					<li><Link to="/staten_island">Staten Island</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Nav;