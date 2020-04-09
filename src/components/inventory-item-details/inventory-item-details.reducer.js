export const inventoryItemDetailsReducer = (itemState, action) => {
	switch (action.type) {
		case "SET_INVENTORY_ITEM":
			console.log("testing", action.payload);
			return action.payload;
		default:
			return inventoryState;
	}
};