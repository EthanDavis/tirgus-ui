export const inventoryItemDetailsReducer = (itemState, action) => {
	switch (action.type) {
		case "SET_ITEM":
			localStorage.setItem(action.payload.id, JSON.stringify(action.payload));
			return action.payload;
		case "GET_ITEM":
		default:
			return itemState;
	}
};