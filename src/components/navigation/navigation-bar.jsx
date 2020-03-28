/* eslint-disable react/prop-types */
import React from 'react';
import './navigation-bar.less'

const NavigationBar = ({ totalItemsInChart }) => {
	return (
		<nav className="navbar navbar-light navigation-bar">
			<a className="navbar-brand" href="#">Navbar</a>
					NavigationBar{" "}
			<span className="badge badge-pill badge-secondary">{totalItemsInChart}</span>
		</nav>
	);
}

export default NavigationBar;