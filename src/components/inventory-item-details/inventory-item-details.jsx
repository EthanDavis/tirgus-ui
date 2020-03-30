/* eslint-disable react/prop-types */
import React, { Component, useEffect } from 'react';

const getItemById = (itemId, inventory) => {
	const index = inventory.items.findIndex(item => item.id === parseInt(itemId));
	return inventory.items[index];
}

const InventoryItemDetails = ({ match, inventory }) => {
	const item = getItemById(match.params.id, inventory);
	return (
		<div>

			{
				<span>InventoryItem {item.name}</span>
			}
		</div>
	);
}

export default InventoryItemDetails;