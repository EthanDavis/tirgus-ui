/* eslint-disable react/prop-types */
import React, { Component, useContext } from 'react';
import InventoryItemCard from "../inventory-item-card/inventory-item-card";
import "./inventory-feed.less";
import Button from '../button/button';

import { InventoryContext } from '../../context/inventory-context';

class InventoryFeed extends Component {

	render() {

		const { addToChart } = this.props
		const { inventory } = useContext(InventoryContext);
		return (

			<div className="row h-100 pt-4 justify-content-center align-items-center">
				{
					inventory.map(item =>
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