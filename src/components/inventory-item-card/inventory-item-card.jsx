/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './inventory-item-card.less'
import { Link } from 'react-router-dom';

const formatCurrency = (amount) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return formatter.format(amount)
}

class InventoryItemCard extends Component {

	render() {
		const { item, addToChart, children } = this.props;

		return (
			<Link to={`/items/${item.id}`}>
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
			</Link>
		);
	}
}

export default InventoryItemCard;