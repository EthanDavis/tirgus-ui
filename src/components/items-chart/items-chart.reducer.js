export const itemsChartReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_CHART":
			return state
		default:
			return state;
	}
};


// deleteFromChart = (itemId) => {
// 	const items = chart.filter(item => item.id !== itemId);
// 	setChart({ chart: items });
// };

// addToChart = (inventoryItem) => {
// 	const chart = [...chart]
// 	chart.push(inventoryItem)

// 	setChart({ chart })
// };


// await httpService.get("/api/items");