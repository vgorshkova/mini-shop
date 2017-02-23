import * as http from '../services/http-request';

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
		http.post("/products", product)
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
		http.get("/products")
			.then(response => {
					dispatch(setProducts(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function deleteProduct(product) {
	return dispatch => {
		dispatch(sendRequest());
		http.del(`/products/${product.id}`)
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
		http.put(`/products/${product.id}`, product)
			.then(response => {
					dispatch(editProduct(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}


