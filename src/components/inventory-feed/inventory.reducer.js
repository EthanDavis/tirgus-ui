export const inventoryReduce = (inventoryState, action) => {
	switch (action.type) {
		case "SET_INVENTORY":
			console.log("testing", action.payload);
			return action.payload;
		default:
			return inventoryState;
	}
};