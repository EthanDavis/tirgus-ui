import React, { useContext } from 'react';
import InventoryItemCard from '../inventory-item-card/inventory-item-card';
import { ItemsChartContext } from '../../context/items-chart-context';
import Button from '../button/button';

const ItemsChart = () => {
	const { chartState, itemsChartDispatch } = useContext(ItemsChartContext);
	return (
		<div className="row justify-content-center align-items-center">
			{
				chartState.map(chartItem =>
					<React.Fragment key={chartItem.item.id} >
						<InventoryItemCard item={chartItem.item} />
						<Button type="button" key={`btn-${chartItem.item.id}`}
							buttonStyle="btn--primary--solid"
							buttonSize="btn--large"
							onClick={() => { itemsChartDispatch({ type: "DELETE_FROM_CHART", payload: chartItem }) }}>Remove From Chart</Button>
					</React.Fragment>
				)}
		</div>
	);
}


export default ItemsChart;