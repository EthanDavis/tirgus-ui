/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './inventory-item.less'

class InventoryItem extends Component {
	state = {}
	render() {
		const { item, addToChart } = this.props;

		return (
			<div className="row p-4">
				<div className="col-md-12">
					<div className="card inventory-card" >
						<img className="card-img-top inventory-card-image" src={item.image} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">{item.description}</p>
							<a href="#" className="btn btn-primary" onClick={() => { addToChart(item) }}>Add To Chart</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InventoryItem;