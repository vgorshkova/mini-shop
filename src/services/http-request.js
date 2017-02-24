import axios from 'axios';
import { API_ENDPOINT } from '../constants/Endpoints';
require('es6-promise').polyfill();

const headers = {};

const client = axios.create({
	baseURL: API_ENDPOINT,
	responseType: 'json',
	headers,
});

export function get(url) {
	return client.get(url);
}

export function post(url, data) {
	return client.post(url, data);
}

export function put(url, data) {
	return client.put(url, data);
}

export function del(url, data) {
	return client.delete(url, data);
}

