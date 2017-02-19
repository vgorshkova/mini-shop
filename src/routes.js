import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, IndexRedirect, Link } from 'react-router';
import { AppContainer, CustomersContainer, Home } from './containers';

const Bar = () => (<div>Bar!</div>);

function createRoutes(browserHistory, store) {
	const history = syncHistoryWithStore(browserHistory, store);

	return (
		<Router history={history}>
			<Route path="/" component={AppContainer} name="Home">
				<Route path="customers" component={CustomersContainer} name="customers" />
				<Route path="products" component={Bar} name="products" />
			</Route>
		</Router>
	);
}

export default createRoutes;
