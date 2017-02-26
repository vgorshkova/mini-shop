//import { createAction } from 'redux-act';
import * as http from '../services/http-request';

import {
	SEND_REQUEST,
	RECEIVE_REQUEST,
	ADD_INVOICE_ITEM,
	EDIT_INVOICE_ITEM,
	SET_INVOICE_ITEMS,
	REMOVE_INVOICE_ITEM,
	DELETE_ALL_INVOICE_ITEMS
} from '../constants/ActionTypes';

export function addInvoiceItem(invoiceItem) {
	return ({
		type: ADD_INVOICE_ITEM,
		payload: {
			invoiceItem
		}
	});
}

export function setInvoiceItems(invoiceItems) {
	return ({
		type: SET_INVOICE_ITEMS,
		payload: {
			invoiceItems
		}
	});
}

export function editInvoiceItem(invoiceItem) {
	return ({
		type: EDIT_INVOICE_ITEM,
		payload: {
			invoiceItem
		}
	});
}

export function removeInvoiceItem(item) {
	return ({
		type: REMOVE_INVOICE_ITEM,
		payload: {
			id: item.id
		}
	});
}

export function deleteAllInvoiceItems () {
	return ({type: DELETE_ALL_INVOICE_ITEMS});
}

export function sendRequest() {
	return ({
		type: SEND_REQUEST,
	});
}

export function receiveRequest() {
	return ({
		type: RECEIVE_REQUEST,
	});
}

export function createInvoiceItem(invoiceId, invoiceItem) {
	return dispatch => {
		http.post(`/invoices/${invoiceId}/items`, invoiceItem)
			.then(response => {
					dispatch(addInvoiceItem(response.data));
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function getInvoiceItems(invoiceId) {
	return dispatch => {
		dispatch(sendRequest());
		http.get(`/invoices/${invoiceId}/items`)
			.then(response => {
					dispatch(setInvoiceItems(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function deleteInvoiceItem(invoiceId, invoiceItem) {
	return dispatch => {
		dispatch(sendRequest());
		http.del(`/invoices/${invoiceId}/items/${invoiceItem.id}`)
			.then(response => {
					dispatch(removeInvoiceItem(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function updateInvoiceItem(invoiceId, invoiceItem) {
	return dispatch => {
		dispatch(sendRequest());
		http.put(`/invoices/${invoiceId}/items/${invoiceItem.id}`, invoiceItem)
			.then(response => {
					dispatch(editInvoiceItem(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}


