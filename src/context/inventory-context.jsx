/* eslint-disable react/prop-types */
import React, { Component, createContext, useReducer } from 'react';
import { inventoryReduce } from '../components/inventory-feed/inventory.reducer';

export const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
	const [inventory, dispatch] = useReducer(inventoryReduce, [
		{
			id: 1,
			name: "Test Item 1",
			price: 15,
			quantity: 0,
			image: "https://picsum.photos/id/100/200/300"
		},
		{
			id: 2,
			name: "Test Item 2",
			price: 10,
			quantity: 10,
			image: "https://picsum.photos/id/200/200/300"
		},
		{
			id: 3,
			name: "Test Item 3",
			price: 15,
			quantity: 10,
			image: "https://picsum.photos/id/300/200/300"
		},
		{
			id: 4,
			name: "Test Item 4",
			price: 15,
			quantity: 0,
			image: "https://picsum.photos/id/400/200/300"
		},
		{
			id: 5,
			name: "Test Item 5",
			price: 15,
			quantity: 10,
			image: "https://picsum.photos/id/500/200/300"
		}
	]);

	return (
		<InventoryContext.Provider value={{ inventory, dispatch }}>
			{
				children
			}
		</InventoryContext.Provider>
	);
};

export default InventoryProvider;