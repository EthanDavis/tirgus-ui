/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import InventoryItemCard from "../inventory-item-card/inventory-item-card";
import "./inventory-feed.less";
import Button from '../button/button';

class InventoryFeed extends Component {

	render() {

		const { inventory, addToChart } = this.props

		return (

			<div className="row h-100 pt-4 justify-content-center align-items-center">
				{
					inventory.items.map(item =>
						<InventoryItemCard key={item.id}
							addToChart={addToChart}
							item={item} >
							{
								item.quantity > 0 ? <Button type="button" key={`btn-${item.id}`}
									buttonStyle="btn--primary--solid"
									buttonSize="btn--medium"
									onClick={() => { addToChart(item) }}>Add To Chart</Button> : "Out Of Stock"
							}
						</InventoryItemCard>

					)}
			</div>

		);
	}
}

export default InventoryFeed;