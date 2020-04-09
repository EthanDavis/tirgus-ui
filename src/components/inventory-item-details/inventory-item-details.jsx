/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useReducer, useState } from 'react';
import httpService from "../../services/http-service";
import Button from '../button/button';
import { inventoryItemDetailsReducer } from './inventory-item-details.reducer';
import "./inventory-item-details.less"
import { itemsChartReducer } from '../items-chart/items-chart.reducer';
export const ItemsDetailsContext = createContext();

const formatCurrency = (amount) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return formatter.format(amount)
}

const InventoryItemDetails = ({ match }) => {

	const [item, dispatch] = useReducer(inventoryItemDetailsReducer, {});

	useEffect(() => {
		const getItem = async () => {
			const initalItem = await httpService.get(`/api/inventory/items/${match.params.id}`);
			dispatch({ type: "SET_INVENTORY_ITEM", payload: initalItem.data })
		}
		getItem()
	}, []);

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
						onClick={() => { dispatch({ type: "ADD_TO_CHART", payload: item }) }}>Add To Chart</Button>
				</div>
			</div>
		</div>

	);
}

export default InventoryItemDetails;