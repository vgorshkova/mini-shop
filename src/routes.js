import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, IndexRedirect, Link } from 'react-router';
import { AppContainer, CustomersContainer, ProductsContainer, InvoicesContainer, InvoiceItemContainer, Home } from './containers';

function createRoutes(browserHistory, store) {
	const history = syncHistoryWithStore(browserHistory, store);

	return (
		<Router history={history}>
			<Route path="/" component={AppContainer} name="Home">
				<Route path="customers" component={CustomersContainer} name="customers" />
				<Route path="products" component={ProductsContainer} name="products" />
				<Route path="invoices" component={InvoicesContainer} name="invoices" >
					<Route path="invoice/create" component={InvoiceItemContainer} name="invoice" />
					<Route path="invoice/edit/:invoiceId" component={InvoiceItemContainer} name="invoice" />
				</Route>
			</Route>
		</Router>
	);
}

export default createRoutes;
