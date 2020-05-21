import React, { useContext } from 'react';
import InventoryItemCard from '../inventory-item-card/inventory-item-card';
import { ItemsChartContext } from '../../context/items-chart-context';
import Button from '../button/button';

const ItemsChart = () => {
	const { chartState, itemsChartDispatch } = useContext(ItemsChartContext);
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
								onClick={() => { itemsChartDispatch({ type: "DELETE_FROM_CHART", payload: chartItem }) }}>Remove From Chart</Button>
						</div>
					</div>
				)}
		</div>
	);
}


export default ItemsChart;