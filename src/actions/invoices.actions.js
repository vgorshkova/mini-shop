//import { createAction } from 'redux-act';
import * as http from '../services/http-request';

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
	debugger;
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

export function createInvoice( invoice ) {
	return dispatch => {
		dispatch(sendRequest());
		http.post("/api/invoices", invoice)
			.then(response => {
					dispatch(addInvoice(response.data));
					dispatch(receiveRequest());
				}
			)
	}
}

export function getInvoices() {
	return dispatch => {
		dispatch(sendRequest());
		http.get("/api/invoices")
			.then(response => {
					dispatch(setInvoices(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function deleteInvoice(invoice) {
	return dispatch => {
		dispatch(sendRequest());
		http.delete(`/api/invoices/${invoice.id}`)
			.then(response => {
					dispatch(removeInvoice(response.data.id));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function updateInvoice(invoice) {
	return dispatch => {
		dispatch(sendRequest());
		http.put(`/api/invoices/${invoice.id}`, invoice)
			.then(response => {
					dispatch(editInvoice(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}


