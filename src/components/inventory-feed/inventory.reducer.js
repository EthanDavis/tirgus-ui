export const inventoryReduce = (inventoryState, action) => {
	switch (action.type) {
		case "SET_INVENTORY":
			return action.payload;
		default:
			return inventoryState;
	}
};