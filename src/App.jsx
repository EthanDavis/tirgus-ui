import React, { Component } from 'react';
import NavigationBar from "./components/navigation/navigation-bar";
import Counters from "./components/counters";
import InventoryFeed from "./components/inventory-feed/inventory-feed"
class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
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


	render() {
		return (
			<React.Fragment>
				<NavigationBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
				<main className="container">
					<InventoryFeed />
				</main>
			</React.Fragment>
		);
	}
}

export default App;