//import { createReducer } from 'redux-act';
import {
	ADD_INVOICE_ITEM,
	EDIT_INVOICE_ITEM,
	REMOVE_INVOICE_ITEM,
	SET_INVOICE_ITEMS,
	DELETE_ALL_INVOICE_ITEMS
} from '../constants/ActionTypes';

const initialState = [];

export default function (state=initialState, action) {
	switch (action.type) {
		case ADD_INVOICE_ITEM:
			return state.concat([action.payload.invoiceItem]);
		case EDIT_INVOICE_ITEM:
			return state.map(invoiceItem => (invoiceItem.id === action.payload.invoiceItem.id ? action.payload.invoiceItem : invoiceItem));
		case REMOVE_INVOICE_ITEM:
			return state.filter(invoiceItem => invoiceItem.id !== action.payload.id);
		case SET_INVOICE_ITEMS:
			return action.payload.invoiceItems;
		case DELETE_ALL_INVOICE_ITEMS:
				return [];
		default:
			return state;
	}
};
