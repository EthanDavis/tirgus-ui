export const itemsChartReducer = (chartState, action) => {
	switch (action.type) {
		case "ADD_TO_CHART":
			chartState = [].concat(action.payload)
			return chartState
		case "DELETE_FROM_CHART":
			chartState = [].concat(action.payload)
			return chartState;
		default:
			return chartState;
	}
};
