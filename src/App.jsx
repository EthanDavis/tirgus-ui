import React, { Component } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import About from "./components/about/about";
import InventoryFeed from "./components/inventory-feed/inventory-feed";
import InventoryItemDetails from './components/inventory-item-details/inventory-item-details';
import ItemsCart from "./components/items-cart/items-cart";
import NavigationBar from "./components/navigation/navigation-bar";
import httpService from './services/http-service';
import InventoryProvider from "./context/inventory-context";
import ItemsCartProvider from './context/items-cart-context';

class App extends Component {

	render() {
		return (
			<InventoryProvider>
				<ItemsCartProvider>
					<NavigationBar />
					<ToastContainer />
					<main className="container-fluid">
						<Switch>
							<Route path="/about" component={About} {...this.props} />
							<Route path="/feed" component={InventoryFeed}  {...this.props} />
							<Route path="/items/:id" component={InventoryItemDetails}  {...this.props} />
							<Route path="/cart" component={ItemsCart}  {...this.props} />
							<Redirect from="" to="/feed" />
						</Switch>
					</main>
				</ItemsCartProvider>
			</InventoryProvider>
		);
	}
}

export default App;
