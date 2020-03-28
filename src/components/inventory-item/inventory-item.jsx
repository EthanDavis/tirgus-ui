/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './inventory-item.less'

const formatCurrency = (amount) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return formatter.format(amount)
}

class InventoryItem extends Component {
	state = {}
	render() {
		const { item, addToChart, children } = this.props;

		return (
			<div className="row p-4">
				<div className="col-md-12">
					<div className="card inventory-card" >
						<img className="card-img-top inventory-card-image" src={item.image} alt="Card image cap" />
						<div className="card-body text-center">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">{formatCurrency(item.price)}</p>
							{
								children
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InventoryItem;