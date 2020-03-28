/* eslint-disable react/prop-types */
import React from 'react';
import './navigation-bar.less'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = ({ totalItemsInChart }) => {
	return (
		<nav className="navbar navbar-light navigation-bar sticky-top">
			<Link className="navbar-brand" to="/">AH Butique</Link>
			<NavLink className="nav-item nav-link" to="/about">
				About
			</NavLink>
			<NavLink className="nav-item nav-link" to="/chart">
				<div>
					<FontAwesomeIcon icon={faShoppingCart} size="lg" />
					<span className="navbar-chart-count">{totalItemsInChart}</span>
				</div>
			</NavLink>

		</nav>
	);
}

export default NavigationBar;