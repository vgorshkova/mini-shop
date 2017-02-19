import { AxiosInstance } from 'axios/axios';
import axios from 'axios';
import { API_ENDPOINT } from '../constants/Endpoints';
/*import { ResponseHandler } from './response-handler';
import  { IResponseHandler } from '../typings';
*/

const headers = {};

const client: AxiosInstance = axios.create({
	baseURL: API_ENDPOINT,
	responseType: 'json',
	headers,
});

/*function onSuccess(payload): IResponseHandler {
	const rh = new ResponseHandler(payload);
	if (rh.hasUnknownError()) {
		throw new Error(rh.getPlainResponse());
	}
	return rh;
}

function onError(error): IResponseHandler {
	throw new Error(error);
}
*/

export function get(url, params, opts = {}) {
	console.log(url, params, opts);
	return client.get(url, { params, ...opts }).then(onSuccess).catch(onError);
}

export function post(url, data) {
	return client.post(url, data).then(onSuccess).catch(onError);
}

export function put(url, data) {
	return client.put(url, data).then(onSuccess).catch(onError);
}

export function del(url, data) {
	return client.delete(url, data).then(onSuccess).catch(onError);
}

