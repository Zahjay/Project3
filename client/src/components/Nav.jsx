import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Nav extends Component {
	render() {
		return(
			<nav>
				<ul className="btn_list">
					<li className="btn"><Link to="/brooklyn">Brooklyn</Link></li>
					<li className="btn"><Link to="/manhattan">Manhattan</Link></li>
					<li className="btn"><Link to="/queens">Queens</Link></li>
					<li className="btn"><Link to="/bronx">Bronx</Link></li>
					<li className="btn"><Link to="/staten_island">Staten Island</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Nav;