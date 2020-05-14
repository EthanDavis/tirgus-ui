/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import InventoryItemCard from '../inventory-item-card/inventory-item-card';
import { ItemsChartContext } from '../../context/items-chart-context';

const ItemsChart = () => {
	const { chartState } = useContext(ItemsChartContext);
	return (
		<div className="row justify-content-center align-items-center">
			{
				chartState.map(item =>
					<InventoryItemCard key={item.id} item={item}/ >
				)}
		</div>
	);
}


export default ItemsChart;