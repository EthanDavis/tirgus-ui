/* eslint-disable react/prop-types */
import React, { Component, createContext, useState } from 'react';

export const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
	const [inventory, setInventory] = useState([
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
		},
		{
			id: 6,
			name: "Test Item 6",
			price: 15,
			quantity: 0,
			image: "https://picsum.photos/id/600/200/300"
		}, {
			id: 7,
			name: "Test Item 7",
			price: 15,
			quantity: 10,
			image: "https://picsum.photos/id/100/200/300"
		},
		{
			id: 8,
			name: "Test Item 8",
			price: 15,
			quantity: 10,
			image: "https://picsum.photos/id/200/200/300"
		},
		{
			id: 9,
			name: "Test Item 9",
			price: 15,
			quantity: 10,
			image: "https://picsum.photos/id/300/200/300"
		},
		{
			id: 10,
			name: "Test Item 10",
			price: 15,
			quantity: 10,
			image: "https://picsum.photos/id/400/200/300"
		},
		{
			id: 11,
			name: "Test Item 11",
			price: 15,
			quantity: 10,
			image: "https://picsum.photos/id/500/200/300"
		},
		{
			id: 12,
			name: "Test Item 12",
			price: 15,
			quantity: 0,
			image: "https://picsum.photos/id/600/200/300"
		}
	]);


	return (
		<InventoryContext.Provider value={inventory}>
			{
				children
			}
		</InventoryContext.Provider>
	);
};

export default InventoryProvider;