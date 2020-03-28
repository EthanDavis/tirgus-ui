/* eslint-disable react/prop-types */
import React from 'react';
import './navigation-bar.less'
import { NavLink, Link } from "react-router-dom";


const NavigationBar = ({ totalItemsInChart }) => {
	return (
		<nav className="navbar navbar-light navigation-bar">
			<Link className="navbar-brand" to="/">Tirgus-UI</Link>
			<NavLink className="nav-item nav-link" to="/chart">
				<span className="badge badge-pill badge-secondary">
					<i className="fa fa-shopping-cart" aria-hidden="true">{totalItemsInChart}	</i>
				</span>
			</NavLink>

		</nav>
	);
}

export default NavigationBar;