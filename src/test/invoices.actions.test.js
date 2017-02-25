import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../../src/actions/invoices.actions';
import * as types from '../../src/constants/ActionTypes'

const invoice1 = {
	id: 1,
	customerId: 1,
	discount: 5,
	total: 10
};

const invoice2 = {
	id: 2,
	customerId: 2,
	discount: 5,
	total: 15
};

const invoice2_edeted = {
	id: 2,
	customerId: 2,
	discount: 10,
	total: 1
};

const invoice3 = {
	id: 3,
	customerId: 3,
	discount: 5,
	total: 20
};

describe('actions', () => {
	it('should create a new invoice', () => {
		const expectedAction = {
			type: types.ADD_INVOICE,
			payload: {invoice: invoice1}
		};
		expect(actions.addInvoice(invoice1)).toEqual(expectedAction);
	})
});

describe('actions', () => {
	it('should replace all existing invoices', () => {

		const expectedAction = {
			type: types.SET_INVOICES,
			payload: {
				invoices:[invoice2, invoice3]
			}
		};
		expect(actions.setInvoices([invoice2, invoice3])).toEqual(expectedAction);
	})
});

describe('actions', () => {
	it('should edit existing invoice', () => {
		const expectedAction = {
			type: types.EDIT_INVOICE,
			payload: {invoice: invoice2_edeted}
		};
		expect(actions.editInvoice(invoice2_edeted)).toEqual(expectedAction);
	})
});

describe('actions', () => {
	it('should remove invoice', () => {
		const expectedAction = {
			type: types.REMOVE_INVOICE,
			payload: {id: 2}
		};
		expect(actions.removeInvoice(2)).toEqual(expectedAction);
	})
});

//--- ASYNC
/*
const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

it('should execute create async invoice', () => {
	const getState = {};
	const action = actions.sendRequest();
	const expectedActions = [action];

	const store = mockStore(getState, expectedActions);

	// Return the promise
	return store.dispatch(action)
		.then(() => {
			const _actions = store.getActions();
			expect(_actions[0]).toEqual(actions.sendRequest())
		})
});

*/
