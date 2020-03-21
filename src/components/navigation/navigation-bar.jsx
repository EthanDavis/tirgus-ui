/* eslint-disable react/prop-types */
import React from 'react';

const NavigationBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">Navbar</a>
					NavigationBar{" "}
			<span className="badge badge-pill badge-secondary">{totalCounters}</span>
		</nav>
	);
}

export default NavigationBar;