//import { createAction } from 'redux-act';
import {
	SEND_REQUEST
} from '../constants/ActionTypes';

export function toggleFetching (customer) {
	return ({
		type: SEND_REQUEST
	});
}
