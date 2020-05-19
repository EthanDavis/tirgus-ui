export const itemsChartReducer = (chartState, action) => {
	switch (action.type) {
		case "ADD_TO_CHART":
			const chartStateCopy = [].concat(chartState);
			const itemIdx = getItemIndex(chartStateCopy, action.payload)
			if (itemIdx != -1) {
				chartStateCopy[itemIdx].count++;
			} else {
				chartStateCopy.push(action.payload)
			}
			chartState = chartStateCopy
			return chartState
		case "DELETE_FROM_CHART":
			const newChartState = [].concat(chartState);
			const idx = getItemIndex(newChartState, action.payload)

			if (newChartState[idx].count === 1) {
				newChartState.splice(idx, 1)
			} else {
				newChartState[idx].count--;
			}
			chartState = newChartState;
			return chartState;
		default:
			return chartState;
	}
};

const getItemIndex = (chartState, payload) => {
	let itemIdx = -1;
	for (let i = 0; i < chartState.length; i++) {
		if (chartState[i].item.id === payload.item.id) {
			itemIdx = i;
		}
	}
	return itemIdx;
}
