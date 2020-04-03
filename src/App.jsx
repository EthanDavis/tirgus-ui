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
import ItemsChartProvider from './context/items-chart-context';

class App extends Component {

	render() {
		return (
			<InventoryProvider>
				<ItemsChartProvider>
					<NavigationBar />
					<ToastContainer />
					<main className="container-fluid">
						<Switch>
							<Route path="/about" component={About} />
							<Route path="/feed" component={InventoryFeed} />
							<Route path="/items/:id" component={InventoryItemDetails} />
							<Route path="/chart" component={ItemsChart} />
							<Redirect from="" to="/feed" />
						</Switch>
					</main>
				</ItemsChartProvider>
			</InventoryProvider>
		);
	}
}

export default App;
