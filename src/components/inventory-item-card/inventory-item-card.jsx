import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types"
import './inventory-item-card.less';

const formatCurrency = (amount) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return formatter.format(amount)
}

class InventoryItemCard extends Component {

	render() {
		const { item, history } = this.props;
		return (
			<div className="row p-4" onClick={() => history.push(`items/${item.id}`)}>
				<div className="col-md-12">
					<div className="card inventory-card" >
						<img className="card-img-top inventory-card-image" src={item.image} alt="Card image cap" />
						<div className="card-body text-center">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">{formatCurrency(item.price)}</p>
							<p className="card-text">{item.quantity > 0 ? "" : "Out of Stock"}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

InventoryItemCard.propTypes = {
	item: PropTypes.object,
	history: PropTypes.object
}

export default InventoryItemCard;