/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import InventoryItem from '../inventory-item/inventory-item';
import Button from '../button/button';


class ItemsChart extends Component {

	render() {
		const { itemsInChart, deleteFromChart } = this.props
		return (
			<div className="row justify-content-center align-items-center">
				{
					itemsInChart.map(item =>
						<InventoryItem key={item.id}
							item={item}>
							<Button onClick={() => deleteFromChart(item.id)}
								type="button" key={`btn-${item.id}`}
								buttonStyle="btn--danger--solid"
								buttonSize="btn--medium">
								Remove From Chart
								</Button>
						</InventoryItem>
					)}
			</div>
		);
	}
}

export default ItemsChart;