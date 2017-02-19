import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import customers from './customers.reducer';
//import products from './products';
//import invoice from './invoice';

const reducer = combineReducers({
	customers,
	//products,
	//invoice,
	routing: routerReducer,
});

export default reducer;
