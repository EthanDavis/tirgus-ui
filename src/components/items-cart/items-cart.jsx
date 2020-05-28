import React, { useContext } from 'react';
import InventoryItemCard from '../inventory-item-card/inventory-item-card';
import { ItemsCartContext } from '../../context/items-cart-context';
import Button from '../button/button';

const ItemsCart = () => {
	const { cartState, ItemsCartDispatch } = useContext(ItemsCartContext);

	const getItemIndex = (cartItem) => {
		let itemIdx = -1;
		for (let i = 0; i < cartState.length; i++) {
			if (cartState[i].item.id === cartItem.id) {
				itemIdx = i;
			}
		}
		return itemIdx;
	}

	const removeFromCart = (quantity, cartItem) => {
		const cartStateCopy = [].concat(cartState);
		const idx = getItemIndex(cartItem)
		if (quantity === 0) {
			cartStateCopy.splice(idx, 1)
		} else {
			cartStateCopy[idx].count = quantity;
		}

		ItemsCartDispatch({ type: "DELETE_FROM_CART", payload: cartStateCopy })
	}

	const buildOptions = (quantity) => {
		var options = [];
		for (let i = 0; i <= quantity; i++) {
			options.push(<option key={i} value={i}>{i}</option>)
		}
		return options;
	}
	const calculateSubTotal = () => {

	}

	return (
		<div className="row">
			{
				cartState.map(cartItem =>
					<div key={cartItem.item.id} className="col-md-6">
						<InventoryItemCard item={cartItem.item} />
						<div className="col-md-6">
							Quantity: 
							<select id="cars" value={cartItem.count}
								onChange={(event) => {
									removeFromCart(parseInt(event.target.value), cartItem.item)
								}}>
								{
									buildOptions(cartItem.count)
								}
							</select>
						</div>
					</div>
				)}
		</div>
	);
}


export default ItemsCart;