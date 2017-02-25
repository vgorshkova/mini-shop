import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../../src/actions/customers.actions';
import * as types from '../../src/constants/ActionTypes'

const customer1 = {
	id: 1,
	name: 'customer name',
	address: "Address",
	phone: "Phone"
};

const customer2 = {
	id: 2,
	name: 'customer2 name2',
	address: "Address 2",
	phone: "Phone 2"
};

const customer2_edeted = {
	id: 2,
	name: 'customer2_edit name2',
	address: "Address 2 Edit",
	phone: "Phone 2 Edit"
};

const customer3 = {
	id: 3,
	name: 'customer3 name3',
	address: "Address 3",
	phone: "Phone 3"
};

describe('actions', () => {
	it('should create a new customer', () => {
		const expectedAction = {
			type: types.ADD_CUSTOMER,
			payload: {customer: customer1}
		};
		expect(actions.addCustomer(customer1)).toEqual(expectedAction);
	})
});

describe('actions', () => {
	it('should replace all existing customers', () => {

		const expectedAction = {
			type: types.SET_CUSTOMERS,
			payload: {
				customers:[customer2, customer3]
			}
		};
		expect(actions.setCustomers([customer2, customer3])).toEqual(expectedAction);
	})
});

describe('actions', () => {
	it('should edit existing customer', () => {
		const expectedAction = {
			type: types.EDIT_CUSTOMER,
			payload: {customer: customer2_edeted}
		};
		expect(actions.editCustomer(customer2_edeted)).toEqual(expectedAction);
	})
});

describe('actions', () => {
	it('should remove customer', () => {
		const expectedAction = {
			type: types.REMOVE_CUSTOMER,
			payload: {id: 2}
		};
		expect(actions.removeCustomer(2)).toEqual(expectedAction);
	})
});

//--- ASYNC
/*
const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

it('should execute create async customer', () => {
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
