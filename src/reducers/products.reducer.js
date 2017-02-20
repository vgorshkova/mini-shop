//import { createReducer } from 'redux-act';
import {
	ADD_PRODUCT,
	EDIT_PRODUCT,
	REMOVE_PRODUCT,
	SET_PRODUCTS,
	DELETE_ALL_PRODUCTS
} from '../constants/ActionTypes';

const initialState = [];

export default function (state=initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT: {
			return state.concat([action.payload.product]);
		}
		case EDIT_PRODUCT: {
			return state.map(product => (product.id === action.payload.product.id ? action.payload.product : product));
		}
		case REMOVE_PRODUCT:
			return state.filter(product => product.id !== action.payload.id);
		case SET_PRODUCTS: {
			return action.payload.products;
		}
		case DELETE_ALL_PRODUCTS:
				return [];
		default:
			return state;
	}
};
