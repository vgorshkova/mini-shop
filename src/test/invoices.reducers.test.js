import reducer from '../../src/reducers/customers.reducer';
import * as types from '../../src/constants/ActionTypes';


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


describe('customer reducer', () => {

	it('should return the initial empty state', () => {
		expect(
			reducer(undefined, {})
		).toEqual([])
	});

	it('should handle ADD_CUSTOMER', () => {
		expect(
			reducer([], {
				type: types.ADD_CUSTOMER,
				payload: {
					customer: customer1
				}
			})
		).toEqual([customer1]);

		expect(
			reducer(
				[customer1],{
					type: types.ADD_CUSTOMER,
					payload: {
						customer: customer2
					}
				}
			)
		).toEqual([customer1, customer2])
	});

	it('should remove customer with id=1', () => {
		expect(
			reducer(
				[customer1, customer2],
				{
					type: types.REMOVE_CUSTOMER,
					payload: {id: 1}
				}
			)
		).toEqual([customer2])
	});

	it('should delete all customers', () => {
		expect(
			reducer(
				[customer1, customer2, customer3],
				{type: types.DELETE_ALL_CUSTOMERS}
			)
		).toEqual([])
	});

	it('should set a new customers', () => {
		expect(
			reducer(
				[customer2],
				{
					type: types.SET_CUSTOMERS,
					payload: {
						customers: [customer1,customer2_edeted, customer3]
					}
				}
			)
		).toEqual([customer1,customer2_edeted, customer3])
	});
});


