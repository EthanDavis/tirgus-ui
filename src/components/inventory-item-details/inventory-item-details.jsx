import { PropTypes } from 'prop-types';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { ItemsCartContext } from '../../context/items-cart-context';
import httpService from "../../services/http-service";
import Button from '../button/button';
import "./inventory-item-details.less";
import { inventoryItemDetailsReducer } from './inventory-item-details.reducer';
import Select from '../select/select';
import Loading from '../loading/loading';

export const ItemsDetailsContext = createContext();

const formatCurrency = (amount) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return formatter.format(amount)
}

const InventoryItemDetails = ({ match }) => {
	const [quantity, setQuantity] = useState(0)

	const { cartState, ItemsCartDispatch } = useContext(ItemsCartContext);
	const [item, dispatch] = useReducer(inventoryItemDetailsReducer, undefined);

	useEffect(() => {
		const getItem = async () => {
			const initalItem = (localStorage.getItem(match.params.id) !== null)
				? JSON.parse(localStorage.getItem(match.params.id))
				: (await httpService.get(`/api/inventory/items/${match.params.id}`)).data;

			dispatch({ type: "SET_ITEM", payload: initalItem })
		}
		getItem()
	}, []);

	const addToCart = (item, quantity) => {
		const cartStateCopy = [].concat(cartState);
		const itemIdx = getItemIndex(item)
		
		if (itemIdx != -1) {
			cartStateCopy[itemIdx].count = quantity;
		} else {
			cartStateCopy.push({ item, count: quantity })
		}
		ItemsCartDispatch({ type: "ADD_TO_CART", payload: cartStateCopy })
	}

	const getItemIndex = (cartItem) => {
		let itemIdx = -1;
		for (let i = 0; i < cartState.length; i++) {
			if (cartState[i].item.id === item.id) {
				itemIdx = i;
			}
		}
		return itemIdx;
	}

	return (
		(item === undefined) ? <Loading /> :
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
						<img className="img-responsive" src={item.image} alt="image cap" />
					</div>
					<div className="col-md-8 justify-content-center text-center item-details">
						<div className="item-details-name">
							<h2>{item.name}</h2>
						</div>
						<div className="item-details-price">
							<p>{formatCurrency(item.price)}</p>
						</div>
						<div className="item-details-quantity">
							<Select value={quantity} selectableValues={[...Array((item.quantity + 1)).keys()]}
								optionsText="Qty:" onChange={(event) => { setQuantity(parseInt(event.target.value)) }} />
						</div>
						<Button type="button" key={`btn-${item.id}`}
							buttonStyle="btn--primary--solid"
							buttonSize="btn--large"
							onClick={() => { addToCart(item, quantity) }}>Add To Cart</Button>
					</div>
				</div>
			</div>

	);
}

InventoryItemDetails.propTypes = {
	match: PropTypes.object
}

export default InventoryItemDetails;