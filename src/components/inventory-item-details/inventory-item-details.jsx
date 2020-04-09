/* eslint-disable react/prop-types */
import React, { useEffect, createContext, useReducer } from 'react';
import Button from '../button/button';
import httpService from "../../services/http-service"
import { inventoryItemDetailsReducer } from './inventory-item-details.reducer';
import ImageUpload from '../image-upload/image-upload';

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
			<ImageUpload />
		</div>
		
	);
}

export default InventoryItemDetails;