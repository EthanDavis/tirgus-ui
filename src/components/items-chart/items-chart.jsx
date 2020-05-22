import React, { useContext } from 'react';
import InventoryItemCard from '../inventory-item-card/inventory-item-card';
import { ItemsChartContext } from '../../context/items-chart-context';
import Button from '../button/button';



const ItemsChart = () => {
	const { chartState, itemsChartDispatch } = useContext(ItemsChartContext);


	const getItemIndex = (chartItem) => {
		let itemIdx = -1;
		for (let i = 0; i < chartState.length; i++) {
			if (chartState[i].item.id === chartItem.item.id) {
				itemIdx = i;
			}
		}
		return itemIdx;
	}

	const removeFromChart = (chartItem) => {
		const chartStateCopy = [].concat(chartState);
		const idx = getItemIndex(chartItem)
		if (chartStateCopy[idx].count === 1) {
			chartStateCopy.splice(idx, 1)
		} else {
			chartStateCopy[idx].count--;
		}
		itemsChartDispatch({ type: "DELETE_FROM_CHART", payload: chartStateCopy })
	}

	return (
		<div className="row">
			{
				chartState.map(chartItem =>
					<div key={chartItem.item.id} className="col-md-6">
						<InventoryItemCard item={chartItem.item} />
						<div className="col-md-6">
							quantity: {chartItem.count}
							<Button type="button" key={`btn-${chartItem.item.id}`}
								buttonStyle="btn--danger--solid"
								buttonSize="btn--large"
								onClick={() => { removeFromChart(chartItem) }}>Remove From Chart</Button>
						</div>
					</div>
				)}
		</div>
	);
}


export default ItemsChart;