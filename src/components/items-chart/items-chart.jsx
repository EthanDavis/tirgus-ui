/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Button from '../button/button';
import InventoryItemCard from '../inventory-item-card/inventory-item-card';
import { ItemsChartContext } from '../../context/items-chart-context';

const ItemsChart = () => {
	const { chartState } = useContext(ItemsChartContext);
	return (
		<div className="row justify-content-center align-items-center">
			{
				chartState.map(item =>
					<InventoryItemCard key={item.id}
						item={item}>
						<Button onClick={() => deleteFromChart(item.id)}
							type="button" key={`btn-${item.id}`}
							buttonStyle="btn--danger--solid"
							buttonSize="btn--medium">
								</Button>
					</InventoryItemCard>
				)}
		</div>
	);
}


export default ItemsChart;