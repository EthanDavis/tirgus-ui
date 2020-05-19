export const itemsChartReducer = (chartState, action) => {
	switch (action.type) {
		case "ADD_TO_CHART":
			let itemIdx = -1;
			for (let i = 0; i < chartState.length; i++) {
				if (chartState[i].item.id === action.payload.item.id) {
					itemIdx = i;
				}
			}
			const chartStateCopy = [].concat(chartState);
			if (itemIdx != -1) {
				chartStateCopy[itemIdx].count++;
			} else {
				chartStateCopy.push(action.payload)
			}
			chartState = chartStateCopy
			return chartState
		case "DELETE_FROM_CHART":
			const idx = chartState.indexOf(action.payload.id);
			chartState.splice(0, idx)
		default:
			return chartState;
	}
};