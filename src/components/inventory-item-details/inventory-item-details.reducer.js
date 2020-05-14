export const inventoryItemDetailsReducer = (itemState, action) => {
	switch (action.type) {
		case "SET_INVENTORY_ITEM":
			return action.payload;
		default:
			return itemState;
	}
};