/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Button from '../button/button';
import httpService from "../../services/http-service"

const InventoryItemDetails = ({ match }) => {
	let item = {};
	useEffect(() => {
		const getItem = async () => {
			item = await httpService.get(`items/${match.params.id}`);
		}

		console.log("item", getItem());
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