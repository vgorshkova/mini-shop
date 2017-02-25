//import { createReducer } from 'redux-act';
import {
	ADD_INVOICE,
	EDIT_INVOICE,
	REMOVE_INVOICE,
	SET_INVOICES,
	DELETE_ALL_INVOICES
} from '../constants/ActionTypes';

const initialState = [{
	id: 1,
	customerId: 2,
	discount: 5,
	total: 30,
}];

export default function (state=initialState, action) {
	switch (action.type) {
		case ADD_INVOICE: {
			return state.concat([action.payload.invoice]);
		}
		case EDIT_INVOICE: {
			debugger;
			return state.map(invoice => (invoice.id === action.payload.invoice.id ? action.payload.invoice : invoice));
		}
		case REMOVE_INVOICE:
			return state.filter(invoice => invoice.id !== action.payload.id);
		case SET_INVOICES: {
			return action.payload.invoices;
		}
		case DELETE_ALL_INVOICES:
				return [];
		default:
			return state;
	}
};
