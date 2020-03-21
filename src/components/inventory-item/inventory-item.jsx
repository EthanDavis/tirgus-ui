/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './inventory-item.less'

class InventoryItem extends Component {
	state = {}
	render() {
		const { item } = this.props;

		return (
			<div className="col-md">
				<div className="card inventory-card" >
					<img className="card-img-top inventory-card-image" src={item.image} alt="Card image cap" />
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