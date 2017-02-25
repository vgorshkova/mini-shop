import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import customers from './customers.reducer';
import products from './products.reducer';
import invoices from './invoices.reducer';
import invoiceItems from './invoiceItems.reducer';

const reducer = combineReducers({
	customers,
	products,
	invoices,
	invoiceItems,
	routing: routerReducer,
});

export default reducer;
