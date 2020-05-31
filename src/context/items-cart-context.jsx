/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useContext, useState } from 'react';
import { itemsCartReducer } from '../components/items-cart/items-cart.reducer';

export const ItemsCartContext = createContext();

const ItemsCartProvider = ({ children }) => {
	const initalCartState = (localStorage.getItem('cart') !== null) ? JSON.parse(localStorage.getItem('cart')) : [];

	const [cartState, ItemsCartDispatch] = useReducer(itemsCartReducer, initalCartState);

	return (
		<ItemsCartContext.Provider value={{ cartState, ItemsCartDispatch }}>
			{
				children
			}
		</ItemsCartContext.Provider>
	);
};

export default ItemsCartProvider;