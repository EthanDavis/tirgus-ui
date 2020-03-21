/* eslint-disable react/prop-types */
import React, { Component } from "react";
import {
	BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import NavigationBar from "./navigation/navigation-bar";

class Counter extends Component {

	render() {
		return (
			<div>
				<button className="btn btn-secondary btn-sm" onClick={() => { this.props.onIncrement(this.props.counter) }}>Increment</button>
				<button className="btn btn-danger sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
			</div>
		);
	}

	getBadgeClasses = () => {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	};

	formatCount = () => {
		return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
	};
}

export default Counter;