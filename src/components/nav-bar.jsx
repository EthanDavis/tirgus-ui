import React, { Component } from "react";
import {
	BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
class NavBar extends Component {
	state = {};

	render() {
		return (
			<div className="pos-f-t">
				<div className="collapse" id="navbarToggleExternalContent">
					<div classNameName="bg-dark p-4">
						<h4 className="text-white">Collapsed content</h4>
						<span className="text-muted">Toggleable via the navbar brand.</span>
					</div>
				</div>
				<nav className="navbar navbar-dark bg-dark">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</nav>
			</div>
		);
	}
}

export default NavBar;
