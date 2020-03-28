/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import InventoryItem from "../inventory-item/inventory-item";
import "./inventory-feed.less";

class InventoryFeed extends Component {

	render() {

		const { inventory, addToChart } = this.props

		return (

			<div className="row h-100 pt-4 justify-content-center align-items-center">
				{
					inventory.items.map(item =>
						<InventoryItem  key={item.id}
							addToChart={addToChart}
							item={item} />
					)}
			</div>

		);
	}
}

export default InventoryFeed;