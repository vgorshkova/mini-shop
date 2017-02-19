import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, push } from 'react-router-redux';


const configureStore = ( history, preloadedState ) => {
	const middleware = compose( applyMiddleware( thunk, routerMiddleware( history )));

	const store = createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(middleware)
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		})
	}

	return store
};

export default configureStore;

