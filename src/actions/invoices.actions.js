//import { createAction } from 'redux-act';
import * as http from '../services/http-request';
import { createInvoiceItem } from './invoicesItems.actions';

import {
	SEND_REQUEST,
	RECEIVE_REQUEST,
	ADD_INVOICE,
	EDIT_INVOICE,
	SET_INVOICES,
	REMOVE_INVOICE,
	DELETE_ALL_INVOICES
} from '../constants/ActionTypes';

export function addInvoice(invoice) {
	return ({
		type: ADD_INVOICE,
		payload: {
			invoice
		}
	});
}

export function setInvoices(invoices) {
	return ({
		type: SET_INVOICES,
		payload: {
			invoices
		}
	});
}

export function editInvoice(invoice) {
	return ({
		type: EDIT_INVOICE,
		payload: {
			invoice
		}
	});
}

export function removeInvoice(id) {
	return ({
		type: REMOVE_INVOICE,
		payload: {
			id
		}
	});
}

export function deleteAllInvoices () {
	return ({type: DELETE_ALL_INVOICES});
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

export function createInvoice(invoice, invoiceItems) {
	return dispatch => {
		dispatch(sendRequest());
		http.post("/invoices", invoice)
			.then(response => {
				dispatch(addInvoice(response.data));
				return Promise.resolve(response.data.id);
			})
			.then(id => {
				invoiceItems.forEach(item => dispatch(createInvoiceItem(id, item)));
			})
			.catch( error => (console.log(error)))
	}
}

export function getInvoices() {
	return dispatch => {
		dispatch(sendRequest());
		http.get("/invoices")
			.then(response => {
					dispatch(setInvoices(response.data || []));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function getInvoice(id) {
	return dispatch => {
		dispatch(sendRequest());
		http.get(`/invoices/${id}`)
			.then(response => {
				dispatch(setInvoices([response.data]));
				dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function deleteInvoice(invoice) {
	return dispatch => {
		dispatch(sendRequest());
		http.del(`/invoices/${invoice.id}`)
			.then(response => {
					dispatch(removeInvoice(response.data.id));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function updateInvoice(invoice, invoiceItems) {
	return dispatch => {
		dispatch(sendRequest());
		http.put(`/invoices/${invoice.id}`, invoice)
			.then(response => {
					dispatch(editInvoice(response.data));
					return Promise.resolve(response.data.id);
				}
			)
			.then(id => {
				invoiceItems.forEach(item => dispatch(createInvoiceItem(id, item)));
			})
			.catch(error => (console.log(error)))
	}
}


