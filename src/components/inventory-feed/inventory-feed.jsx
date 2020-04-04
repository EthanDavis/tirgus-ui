/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { InventoryContext } from '../../context/inventory-context';
import Button from '../button/button';
import InventoryItemCard from "../inventory-item-card/inventory-item-card";
import "./inventory-feed.less";
import { ItemsChartContext } from '../../context/items-chart-context';

const InventoryFeed = (props) => {
	const { inventory, dispatch } = useContext(InventoryContext);
	const { history } = props

	return (
		<div className="row h-100 pt-4 justify-content-center align-items-center">
			{
				inventory.map(item =>
					<InventoryItemCard key={item.id} item={item} history={history} />
				)}
		</div>
	);
}

export default InventoryFeed;