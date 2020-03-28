/* eslint-disable react/prop-types */
import React from 'react';
import './navigation-bar.less'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = ({ totalItemsInChart }) => {
	return (
		<nav className="navbar navbar-light navigation-bar">
			<Link className="navbar-brand" to="/">Tirgus-UI</Link>
			<NavLink className="nav-item nav-link" to="/chart">
				<span className="badge badge-pill badge-secondary">
					<FontAwesomeIcon icon={faShoppingCart} />
					{totalItemsInChart}
				</span>
			</NavLink>

		</nav>
	);
}

export default NavigationBar;