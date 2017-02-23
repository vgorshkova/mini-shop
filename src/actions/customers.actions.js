import * as http from '../services/http-request';

import {
	SEND_REQUEST,
	RECEIVE_REQUEST,
	ADD_CUSTOMER,
	EDIT_CUSTOMER,
	SET_CUSTOMERS,
	REMOVE_CUSTOMER,
	DELETE_ALL_CUSTOMERS
} from '../constants/ActionTypes';

export function addCustomer(customer) {
	return ({
		type: ADD_CUSTOMER,
		payload: {
			customer
		}
	});
}

export function setCustomers(customers) {
	return ({
		type: SET_CUSTOMERS,
		payload: {
			customers
		}
	});
}

export function editCustomer(customer) {
	return ({
		type: EDIT_CUSTOMER,
		payload: {
			customer
		}
	});
}

export function removeCustomer(id) {
	return ({
		type: REMOVE_CUSTOMER,
		payload: {
			id
		}
	});
}

export function deleteAllCustomers () {
	return ({type: DELETE_ALL_CUSTOMERS});
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

export function createCustomer( customer ) {
	return dispatch => {
		dispatch(sendRequest());
		http.post("/customers", customer)
			.then(response => {
					dispatch(addCustomer(response.data));
					dispatch(receiveRequest());
				}
			)
	}
}

export function getCustomers() {
	return dispatch => {
		dispatch(sendRequest());
		http.get("/customers")
			.then(response => {
					dispatch(setCustomers(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function deleteCustomer(customer) {
	return dispatch => {
		dispatch(sendRequest());
		http.del(`/customers/${customer.id}`)
			.then(response => {
					dispatch(removeCustomer(response.data.id));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function updateCustomer(customer) {
	return dispatch => {
		dispatch(sendRequest());
		http.put(`/customers/${customer.id}`, customer)
			.then(response => {
					dispatch(editCustomer(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}


