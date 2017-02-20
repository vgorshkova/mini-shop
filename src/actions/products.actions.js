//import { createAction } from 'redux-act';
import axios from 'axios';

import {
	SEND_REQUEST,
	RECEIVE_REQUEST,
	ADD_PRODUCT,
	EDIT_PRODUCT,
	SET_PRODUCTS,
	REMOVE_PRODUCT,
	DELETE_ALL_PRODUCTS
} from '../constants/ActionTypes';

export function addProduct(product) {
	return ({
		type: ADD_PRODUCT,
		payload: {
			product
		}
	});
}

export function setProducts(products) {
	return ({
		type: SET_PRODUCTS,
		payload: {
			products
		}
	});
}

export function editProduct(product) {
	return ({
		type: EDIT_PRODUCT,
		payload: {
			product
		}
	});
}

export function removeProduct(id) {
	return ({
		type: REMOVE_PRODUCT,
		payload: {
			id
		}
	});
}

export function deleteAllProducts () {
	return ({type: DELETE_ALL_PRODUCTS});
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

export function createProduct( product ) {
	return dispatch => {
		dispatch(sendRequest());
		axios.post("/api/products", product)
			.then(response => {
					dispatch(addProduct(response.data));
					dispatch(receiveRequest());
				}
			)
	}
}

export function getProducts() {
	return dispatch => {
		dispatch(sendRequest());
		axios.get("/api/products")
			.then(response => {
					dispatch(setProducts(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function deleteProduct(id) {
	return dispatch => {
		dispatch(sendRequest());
		debugger;
		axios.delete(`/api/products/${id}`)
			.then(response => {
					dispatch(removeProduct(response.data.id));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function updateProduct(product) {
	return dispatch => {
		dispatch(sendRequest());
		axios.put(`/api/products/${product.id}`, product)
			.then(response => {
					dispatch(editProduct(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}


