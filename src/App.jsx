import React, { Component } from 'react';
import NavigationBar from "./components/navigation/navigation-bar";
import Counters from "./components/counters";
import InventoryFeed from "./components/inventory-feed/inventory-feed"

const GlobalStore = React.createContext();
class App extends Component {

	state = {
		chart: [],
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

	handleReset = () => {
		const counters = this.state.counters.map((counter) => {
			counter.value = 0;
			return counter;
		});
		this.setState({ counters })
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter(counter => counter.id !== counterId);
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter }
		counters[index].value++;
		this.setState({ counters })
	};

	addToChart = (inventoryItem) => {
		console.log("Adding", inventoryItem);
		const chart = [...this.state.chart]
		const index = chart.indexOf(inventoryItem)
		chart[index] = { ...inventoryItem }

		this.setState({ chart })
	};

	render() {
		return (
			<React.Fragment>
				<NavigationBar totalItemsInChart={this.state.chart.length} />
				<main className="container">
					<InventoryFeed inventory={this.state.inventory}
						addToChart={this.addToChart} />
				</main>
			</React.Fragment>
		);
	}
}

export default App;