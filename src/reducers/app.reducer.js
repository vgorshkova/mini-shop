//import { createReducer } from 'redux-act';
import {
	SEND_REQUEST,
	RECEIVE_REQUEST,
} from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
};

export default function (state=initialState, action) {
	switch (action.type) {
		case SEND_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case RECEIVE_REQUEST:
			return {
				...state,
				isFetching: false
			};
		default:
			return state;
	}
};
