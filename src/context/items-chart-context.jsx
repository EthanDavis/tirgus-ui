/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useContext, useState } from 'react';
import { itemsChartReducer } from '../components/items-chart/items-chart.reducer';

// await httpService.get("/api/items");

export const ItemsChartContext = createContext();

const ItemsChartProvider = ({ children }) => {

	const [chartState, dispatch] = useReducer(itemsChartReducer, []);

	return (
		<ItemsChartContext.Provider value={{ chartState, dispatch }}>
			{
				children
			}
		</ItemsChartContext.Provider>
	);
};

export default ItemsChartProvider;