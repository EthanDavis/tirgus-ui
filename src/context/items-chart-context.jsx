/* eslint-disable react/prop-types */
import React, { Component, createContext, useState } from 'react';

export const ItemsChartContext = createContext();

const ItemsChartProvider = ({ children }) => {

	const [chart, setChart] = useState([]);


	deleteFromChart = (itemId) => {
		const items = this.state.chart.filter(item => item.id !== itemId);
		setChart({ chart: items });
	};


	addToChart = (inventoryItem) => {
		const chart = [...this.state.chart]
		chart.push(inventoryItem)

		setChart({ chart })
	};

	return (
		<ItemsChartContext.Provider value={chart, addToChart, deleteFromChart}>
			{
				children
			}
		</ItemsChartContext.Provider>
	);
}