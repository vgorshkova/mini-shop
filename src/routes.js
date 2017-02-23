import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, IndexRedirect, Link } from 'react-router';
import {
	AppContainer,
	CustomersContainer,
	ProductsContainer,
	InvoicesContainer,
	InvoiceItemCreateContainer,
	InvoiceItemEditContainer,
	Home,
} from './containers';
import { RoutesNames } from './constants/RoutesNames';

function createRoutes(browserHistory, store) {
	const history = syncHistoryWithStore(browserHistory, store);

	return (
		<Router history={history}>
			<Route path="/" component={AppContainer} name={RoutesNames.home}>
				<Route path="customers" component={CustomersContainer} name={RoutesNames.customers} />
				<Route path="products" component={ProductsContainer} name={RoutesNames.products} />
				<Route path="invoices" component={InvoicesContainer} name={RoutesNames.invoices} />
				<Route path="invoices/create" component={InvoiceItemCreateContainer} name={RoutesNames.createInvoice} />
				<Route path="invoices/edit/:invoiceId" component={InvoiceItemEditContainer} name={RoutesNames.editInvoice} />
			</Route>
		</Router>
	);
}

export default createRoutes;
