/* eslint-disable react/prop-types */
import React, { Component, createContext, useReducer } from 'react';
import { inventoryReduce } from '../components/inventory-feed/inventory.reducer';

export const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
	const [inventory, dispatch] = useReducer(inventoryReduce, []);

	return (
		<InventoryContext.Provider value={{ inventory, dispatch }}>
			{
				children
			}
		</InventoryContext.Provider>
	);
};

export default InventoryProvider;