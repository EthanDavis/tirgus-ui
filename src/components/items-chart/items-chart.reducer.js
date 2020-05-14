export const itemsChartReducer = (chartState, action) => {
	switch (action.type) {
		case "ADD_TO_CHART":
			const count = chartState.map((item) => {
				let count = count + (action.payload.id === item.id) ? 1 : 0;
				return count;
			});
		
			chartState.push({ ...action.payload.item, count: count });
			return chartState
		case "DELETE_FROM_CHART":
			const index = chartState.indexOf(action.payload.id);
			chartState.splice(0, index);
		default:
			return chartState;
	}
};