/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Button from '../button/button';
import InventoryItemCard from '../inventory-item-card/inventory-item-card';


class ItemsChart extends Component {

	render() {
		const { itemsInChart, deleteFromChart } = this.props
		return (
			<div className="row justify-content-center align-items-center">
				{
					itemsInChart.map(item =>
						<InventoryItemCard key={item.id}
							item={item}>
							<Button onClick={() => deleteFromChart(item.id)}
								type="button" key={`btn-${item.id}`}
								buttonStyle="btn--danger--solid"
								buttonSize="btn--medium">
								Remove From Chart
								</Button>
						</InventoryItemCard>
					)}
			</div>
		);
	}
}

export default ItemsChart;