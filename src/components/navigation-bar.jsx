/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class NavigationBar extends Component {
	state = {}
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">Navbar</a>
					NavigationBar{" "}
				<span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
			</nav>
		);
	}
}

export default NavigationBar;