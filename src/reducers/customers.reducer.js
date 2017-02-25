//import { createReducer } from 'redux-act';
import {
	ADD_CUSTOMER,
	EDIT_CUSTOMER,
	REMOVE_CUSTOMER,
	SET_CUSTOMERS,
	DELETE_ALL_CUSTOMERS
} from '../constants/ActionTypes';

const initialState = [];

export default function (state=initialState, action) {
	switch (action.type) {
		case ADD_CUSTOMER:
			return state.concat([action.payload.customer]);
		case EDIT_CUSTOMER:
			return state.map(customer => (customer.id === action.payload.customer.id ? action.payload.customer : customer));
		case REMOVE_CUSTOMER:
			return state.filter(customer => customer.id !== action.payload.id);
		case SET_CUSTOMERS:
			return action.payload.customers;
		case DELETE_ALL_CUSTOMERS:
				return [];
		default:
			return state;
	}
};
