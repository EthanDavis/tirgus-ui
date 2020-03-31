/* eslint-disable react/prop-types */
import React, { Component, useEffect } from 'react';

const getItemById = (itemId, inventory) => {
	const index = inventory.items.findIndex(item => item.id === parseInt(itemId));
	return inventory.items[index];
}

const InventoryItemDetails = ({ item }) => {
	console.log("testing", item);
	return (
		<div>
			{
				<span>InventoryItem {item}</span>
			}
		</div>
	);
}

export default InventoryItemDetails;