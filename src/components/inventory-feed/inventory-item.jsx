/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class InventoryItem extends Component {
	state = {}
	render() {
		const { item } = this.props;

		return (
			<div className="col-md">
				<div className="card" >
					<img className="card-img-top" src={item.image} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<p className="card-text">{item.description}</p>
						<a href="#" className="btn btn-primary">Add To Chart</a>
					</div>
				</div>
			</div>
		);
	}
}

export default InventoryItem;