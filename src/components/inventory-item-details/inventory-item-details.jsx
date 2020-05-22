import { PropTypes } from 'prop-types';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ItemsChartContext } from '../../context/items-chart-context';
import httpService from "../../services/http-service";
import Button from '../button/button';
import "./inventory-item-details.less";
import { inventoryItemDetailsReducer } from './inventory-item-details.reducer';

export const ItemsDetailsContext = createContext();

const formatCurrency = (amount) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return formatter.format(amount)
}

const InventoryItemDetails = ({ match }) => {
	const { chartState, itemsChartDispatch } = useContext(ItemsChartContext);
	const [item, dispatch] = useReducer(inventoryItemDetailsReducer, {});

	useEffect(() => {
		const getItem = async () => {
			const initalItem = await httpService.get(`/api/inventory/items/${match.params.id}`);
			dispatch({ type: "SET_INVENTORY_ITEM", payload: initalItem.data })
		}
		getItem()
	}, []);

	const addToChart = (item) => {
		const chartStateCopy = [].concat(chartState);
		const itemIdx = getItemIndex(item)
		if (itemIdx != -1) {
			chartStateCopy[itemIdx].count++;
		} else {
			chartStateCopy.push({ item, count: 1 })
		}
		itemsChartDispatch({ type: "ADD_TO_CHART", payload: chartStateCopy })
	}

	const getItemIndex = (chartItem) => {
		let itemIdx = -1;
		for (let i = 0; i < chartState.length; i++) {
			if (chartState[i].item.id === item.id) {
				itemIdx = i;
			}
		}
		return itemIdx;
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<img className="img-responsive" src={item.image} alt="image cap" />
				</div>
				<div className="col-md-6 justify-content-center text-center item-details">
					<div className="item-details-name">
						<h2>{item.name}</h2>
					</div>
					<div className="item-details-price">
						<p>{formatCurrency(item.price)}</p>
					</div>
					<Button type="button" key={`btn-${item.id}`}
						buttonStyle="btn--primary--solid"
						buttonSize="btn--large"
						onClick={() => { addToChart(item) }}>Add To Chart</Button>
				</div>
			</div>
		</div>

	);
}

InventoryItemDetails.propTypes = {
	match: PropTypes.object
}

export default InventoryItemDetails;