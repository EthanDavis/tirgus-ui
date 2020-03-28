/* eslint-disable react/prop-types */
import React from 'react';
import './navigation-bar.less'
import { Link, Switch } from "react-router-dom";


const NavigationBar = ({ totalItemsInChart }) => {
	return (
		<nav className="navbar navbar-light navigation-bar">

			<Link className="navbar-brand" to="/">Navbar</Link>
			<ul className="navbar-nav">
				<li className="nav-item active">
					<Link className="nav-link" to="/chart">Shopping Chart <span className="sr-only">(current)</span></Link>
				</li>
			</ul>

			<span className="badge badge-pill badge-secondary">
				<i className="fa fa-shopping-cart" aria-hidden="true">{totalItemsInChart}	</i>
			</span>

		</nav>
	);
}

export default NavigationBar;