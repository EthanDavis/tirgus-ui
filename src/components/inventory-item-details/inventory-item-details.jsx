/* eslint-disable react/prop-types */
import React, { Component, useEffect } from 'react';
import Button from '../button/button';

const InventoryItemDetails = ({ match }) => { 
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