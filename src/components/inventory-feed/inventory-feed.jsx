/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import InventoryItem from "../inventory-item/inventory-item";


class InventoryFeed extends Component {

	render() {

		const { inventory, addToChart } = this.props

		return (
			<div className="container">
				<div className="row">
					{
						inventory.items.map(item =>
							<InventoryItem key={item.id}
								addToChart={addToChart}
								item={item} />
						)}
				</div>
			</div>
		);
	}
}

export default InventoryFeed;