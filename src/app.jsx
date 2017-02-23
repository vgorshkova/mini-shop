import React from 'react';
import { render } from 'react-dom';

import 'react-select/dist/react-select.css';

import { Provider } from 'react-redux';
import { browserHistory } from 'react-router'
import configureStore from './store';
import createRoutes from './routes';

const store = configureStore(browserHistory);
const router = createRoutes(browserHistory, store);

render((
	<Provider store={store}>
		{router}
	</Provider>
), document.getElementById('app-root'));
