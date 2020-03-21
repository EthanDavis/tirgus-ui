/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import InventoryItem from "./inventory-item";


class InventoryFeed extends Component {
	state = {
		inventory: {
			items: [
				{
					id: 1,
					name: "Test Item 1",
					image: "https://picsum.photos/id/1/200/300"
				},
				{
					id: 2,
					name: "Test Item 2",
					image: "https://picsum.photos/id/1/200/300"
				},
				{
					id: 3,
					name: "Test Item 3",
					image: "https://picsum.photos/id/1/200/300"
				},
				{
					id: 4,
					name: "Test Item 4",
					image: "https://picsum.photos/id/1/200/300"
				},
			]
		}
	};


	render() {
		return (
			<div className="container">
				<div className="row">
					{
						this.state.inventory.items.map(item =>
							<InventoryItem key={item.id} item={item} />
						)}
				</div>
			</div>
		);
	}
}

export default InventoryFeed;