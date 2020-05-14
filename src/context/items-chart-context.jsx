/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useContext, useState } from 'react';
import { itemsChartReducer } from '../components/items-chart/items-chart.reducer';

export const ItemsChartContext = createContext();

const ItemsChartProvider = ({ children }) => {

	const [chartState, itemsChartDispatch] = useReducer(itemsChartReducer, []);

	return (
		<ItemsChartContext.Provider value={{ chartState, itemsChartDispatch }}>
			{
				children
			}
		</ItemsChartContext.Provider>
	);
};

export default ItemsChartProvider;