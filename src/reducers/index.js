import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app.reducer';
import customers from './customers.reducer';
import products from './products.reducer';
import invoices from './invoices.reducer';
import invoiceItems from './invoiceItems.reducer';
import initialInvoiceItems from './initialInvoiceItems.reducer';

const reducer = combineReducers({
	app,
	customers,
	products,
	invoices,
	invoiceItems,
	initialInvoiceItems,
	routing: routerReducer,
});

export default reducer;
