import {
	SET_INVOICE_ITEMS
} from '../constants/ActionTypes';

const initialState = [];

export default function (state=initialState, action) {
	switch (action.type) {
		case SET_INVOICE_ITEMS:
			return action.payload.invoiceItems;
		default:
			return state;
	}
};
