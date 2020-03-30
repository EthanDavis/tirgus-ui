import React, { Component } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./components/about/about";
import InventoryFeed from "./components/inventory-feed/inventory-feed";
import ItemsChart from "./components/items-chart/items-chart";
import NavigationBar from "./components/navigation/navigation-bar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import httpService from './services/http-service'

const GlobalStore = React.createContext();

class App extends Component {

	state = {
		chart: [],
		inventory: {
			items: [
				{
					id: 1,
					name: "Test Item 1",
					price: 15,
					quantity: 0,
					image: "https://picsum.photos/id/100/200/300"
				},
				{
					id: 2,
					name: "Test Item 2",
					price: 10,
					quantity: 10,
					image: "https://picsum.photos/id/200/200/300"
				},
				{
					id: 3,
					name: "Test Item 3",
					price: 15,
					quantity: 10,
					image: "https://picsum.photos/id/300/200/300"
				},
				{
					id: 4,
					name: "Test Item 4",
					price: 15,
					quantity: 0,
					image: "https://picsum.photos/id/400/200/300"
				},
				{
					id: 5,
					name: "Test Item 5",
					price: 15,
					quantity: 10,
					image: "https://picsum.photos/id/500/200/300"
				},
				{
					id: 6,
					name: "Test Item 6",
					price: 15,
					quantity: 0,
					image: "https://picsum.photos/id/600/200/300"
				}, {
					id: 7,
					name: "Test Item 7",
					price: 15,
					quantity: 10,
					image: "https://picsum.photos/id/100/200/300"
				},
				{
					id: 8,
					name: "Test Item 8",
					price: 15,
					quantity: 10,
					image: "https://picsum.photos/id/200/200/300"
				},
				{
					id: 9,
					name: "Test Item 9",
					price: 15,
					quantity: 10,
					image: "https://picsum.photos/id/300/200/300"
				},
				{
					id: 10,
					name: "Test Item 10",
					price: 15,
					quantity: 10,
					image: "https://picsum.photos/id/400/200/300"
				},
				{
					id: 11,
					name: "Test Item 11",
					price: 15,
					quantity: 10,
					image: "https://picsum.photos/id/500/200/300"
				},
				{
					id: 12,
					name: "Test Item 12",
					price: 15,
					quantity: 0,
					image: "https://picsum.photos/id/600/200/300"
				},
			]
		}
	};

	async componentDidMount() {
		const response = await httpService.get("/api/items");

		console.log("testing", response);
	}


	deleteFromChart = (itemId) => {
		const items = this.state.chart.filter(item => item.id !== itemId);
		this.setState({ chart: items });
	};


	addToChart = (inventoryItem) => {
		const chart = [...this.state.chart]
		chart.push(inventoryItem)

		this.setState({ chart })
	};

	render() {
		return (
			<React.Fragment>
				<NavigationBar totalItemsInChart={this.state.chart.length} />
				<ToastContainer />
				<main className="container-fluid">
					<Switch>
						<Route path="/about" render={() => <About />} />
						<Route path="/feed" render={() =>
							<InventoryFeed inventory={this.state.inventory} addToChart={this.addToChart} {...this.props} />
						} />
						<Route path="/chart" render={() =>
							<ItemsChart itemsInChart={this.state.chart} deleteFromChart={this.deleteFromChart} {...this.props} />
						} />
						<Redirect from="" to="/feed" />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
