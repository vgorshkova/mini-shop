import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import customers from './customers.reducer';
import products from './products.reducer';
import invoices from './invoices.reducer';

const reducer = combineReducers({
	customers,
	products,
	invoices,
	routing: routerReducer,
});

export default reducer;
