export const inventoryReduce = (inventoryState, action) => {
	switch (action.type) {
		case "GET_ITEM":
			console.log("inventoryState is:", inventoryState);
			return inventoryState.find(item => item.id === action.payload);
		default:
			return inventoryState;
	}
};