/* eslint-disable react/prop-types */
import React, { Component, useEffect } from 'react';
import Button from '../button/button';
import { useContext } from 'react';
import { inventoryReduce } from '../inventory-feed/inventory.reducer';
import { InventoryContext } from '../../context/inventory-context';

const InventoryItemDetails = ({ match }) => {
	const { inventoryState, dispatch } = useContext(InventoryContext);
	const item = dispatch({ type: "GET_ITEM", payload: parseInt(match.params.id) });

	console.log("item should be", item);
	return (
		<div>
			<Button type="button" key={`btn-`}
				buttonStyle="btn--primary--solid"
				buttonSize="btn--medium"
				onClick={() => { dispatch({ type: "ADD_TO_CHART", payload: item }) }}>Add To Chart</Button>
		</div>
	);
}

export default InventoryItemDetails;