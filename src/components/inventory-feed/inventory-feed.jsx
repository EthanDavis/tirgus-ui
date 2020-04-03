/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { InventoryContext } from '../../context/inventory-context';
import Button from '../button/button';
import InventoryItemCard from "../inventory-item-card/inventory-item-card";
import "./inventory-feed.less";

const InventoryFeed = () => {
	const { inventory, setInventory } = useContext(InventoryContext);

	return (
		<div className="row h-100 pt-4 justify-content-center align-items-center">
			{
				inventory.map(item =>
					<InventoryItemCard key={item.id}
						item={item} >
						{
							item.quantity > 0 ? <Button type="button" key={`btn-${item.id}`}
								buttonStyle="btn--primary--solid"
								buttonSize="btn--medium"
								onClick={() => { console.log("TEST") }}>Add To Chart</Button> : "Out Of Stock"
						}
					</InventoryItemCard>

				)}
		</div>
	);
}

export default InventoryFeed;