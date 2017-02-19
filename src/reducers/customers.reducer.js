//import { createReducer } from 'redux-act';
import {
	ADD_CUSTOMER,
	SET_CUSTOMERS,
	REMOVE_CUSTOMER,
	DELETE_ALL_CUSTOMERS
} from '../constants/ActionTypes';

const initialState = [];

export default function (state=initialState, action) {
	switch (action.type) {
		case ADD_CUSTOMER:
		{
			return state.concat([action.payload.customer]);
		}
		case SET_CUSTOMERS:
		{
			return action.payload.customers;
		}

		case REMOVE_CUSTOMER:
			return state.filter(customer => customer.id !== action.payload.id);

		case DELETE_ALL_CUSTOMERS:
				return [];
		default:
			return state;
	}
};
