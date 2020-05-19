import React, { useContext } from 'react';
import InventoryItemCard from '../inventory-item-card/inventory-item-card';
import { ItemsChartContext } from '../../context/items-chart-context';

const ItemsChart = () => {
	const { chartState } = useContext(ItemsChartContext);
	return (
		<div className="row justify-content-center align-items-center">
			{
				chartState.map(chartItem =>
					<InventoryItemCard key={chartItem.item.id} item={chartItem.item}/ >
				)}
		</div>
	);
}


export default ItemsChart;