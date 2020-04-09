/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useReducer } from 'react';
import httpService from "../../services/http-service";
import Button from '../button/button';
import { inventoryItemDetailsReducer } from './inventory-item-details.reducer';

export const ItemsDetailsContext = createContext();

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
		<div className="row">
			<div className="col-md-6">
				<img className="img-responsive" src={item.image} alt="image cap" />
			</div>
			<div className="col-md-6">
				<h2>{item.name}</h2>
				<p>{item.price}</p>
				<Button type="button" key={`btn-${item.id}`}
					buttonStyle="btn--primary--solid"
					buttonSize="btn--medium"
					onClick={() => { dispatch({ type: "ADD_TO_CHART", payload: item }) }}>Add To Chart</Button>
			</div>
		</div>

	);
}

export default InventoryItemDetails;