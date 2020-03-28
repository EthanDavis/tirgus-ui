/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import InventoryItem from '../inventory-item/inventory-item';


class ItemsChart extends Component {

	render() {
		const { itemsInChart } = this.props
		return (
			<div className="row">
				Shopping Chart
				{
					itemsInChart.map(item =>
						<InventoryItem key={item.id}
							item={item} />
					)}
			</div>
		);
	}
}

export default ItemsChart;