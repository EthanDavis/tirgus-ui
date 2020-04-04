/* eslint-disable react/prop-types */
import React, { useEffect, createContext, useReducer } from 'react';
import Button from '../button/button';
import httpService from "../../services/http-service"
import { inventoryItemDetailsReduce } from './inventory-item-details.reducer';

export const ItemsDetailsContext = createContext();


const InventoryItemDetails = ({ match }) => {

	const [item, dispatch] = useReducer(inventoryItemDetailsReduce, {});

	useEffect(() => {
		const getItem = async () => {
			const initalItem = await httpService.get(`/api/inventory/items/${match.params.id}`);
			dispatch({ type: "SET_INVENTORY_ITEM", payload: initalItem.data })
		}
		getItem()
	});

	return (
		<div>
			<Button type="button" key={`btn-${item.id}`}
				buttonStyle="btn--primary--solid"
				buttonSize="btn--medium"
				onClick={() => { dispatch({ type: "ADD_TO_CHART", payload: item }) }}>Add To Chart</Button>
		</div>
	);
}

export default InventoryItemDetails;