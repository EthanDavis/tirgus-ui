import React, { useContext, useEffect } from 'react';
import { InventoryContext } from '../../context/inventory-context';
import InventoryItemCard from "../inventory-item-card/inventory-item-card";
import httpService from "../../services/http-service";
import "./inventory-feed.less";
import Loading from '../loading/loading';
import { PropTypes } from 'prop-types';

const InventoryFeed = (props) => {
	const { inventory, dispatch } = useContext(InventoryContext);
	const { history } = props

	useEffect(() => {
		const getInventory = async () => {
			const initialInventoryState = await httpService.get(`/api/inventory/items`);
			dispatch({ type: "SET_INVENTORY", payload: initialInventoryState.data });
		}
		getInventory();
	}, []);

	return (
		<div className="row h-100 pt-4 justify-content-center align-items-center">
			{inventory.length === 0 ? <Loading /> :
				inventory.map(item =>
					<InventoryItemCard key={item.id} item={item} history={history} />
				)}
		</div>
	);
}

InventoryFeed.propTypes = {
	history: PropTypes.object
}

export default InventoryFeed;