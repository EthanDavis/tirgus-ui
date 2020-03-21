/* eslint-disable react/prop-types */
import React from 'react';
import './navigation-bar.less'

const NavigationBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light navigation-bar">
			<a className="navbar-brand" href="#">Navbar</a>
					NavigationBar{" "}
			<span className="badge badge-pill badge-secondary">{totalCounters}</span>
		</nav>
	);
}

export default NavigationBar;