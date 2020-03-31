import React, { Component } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import About from "./components/about/about";
import InventoryFeed from "./components/inventory-feed/inventory-feed";
import InventoryItemDetails from './components/inventory-item-details/inventory-item-details';
import ItemsChart from "./components/items-chart/items-chart";
import NavigationBar from "./components/navigation/navigation-bar";
import httpService from './services/http-service';
import InventoryProvider from "./context/inventory-context";

const GlobalStore = React.createContext();

class App extends Component {

	state = {
		chart: [],
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
			<InventoryProvider>
				<NavigationBar totalItemsInChart={this.state.chart.length} />
				<ToastContainer />
				<main className="container-fluid">
					<Switch>
						<Route path="/about" render={() => <About />} />
						<Route path="/feed" render={(props) =>
							<InventoryFeed addToChart={this.addToChart} {...props} />
						} />
						<Route path="/items/:id" render={(props) => <InventoryItemDetails item={props.item} {...props} />} />
						<Route path="/chart" render={(props) =>
							<ItemsChart itemsInChart={this.state.chart} deleteFromChart={this.deleteFromChart} {...props} />
						} />
						<Redirect from="" to="/feed" />
					</Switch>
				</main>
			</InventoryProvider>
		);
	}
}

export default App;
