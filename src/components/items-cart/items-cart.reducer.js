export const itemsCartReducer = (cartState, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			cartState = [].concat(action.payload)
			localStorage.setItem("chart", JSON.stringify(cartState));
			return cartState
		case "DELETE_FROM_CART":
			cartState = [].concat(action.payload)
			localStorage.setItem("chart", JSON.stringify(cartState))
			return cartState;
		default:
			return cartState;
	}
};
