export const itemsChartReducer = (chartState, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_CHART":
			chartState.push(action.payload);
			return chartState
		case "DELETE_FROM_CHART":
			const index = chartState.indexOf(action.payload.id);
			chartState.splice(0, index);
		default:
			return chartState;
	}
};


// deleteFromChart = (itemId) => {
// 	const items = chart.filter(item => item.id !== itemId);
// 	setChart({ chart: items });
// };



// await httpService.get("/api/items");