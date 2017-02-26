//
// 'label' - the label name
// 'canEdit' - prop will be showen on the form/dialog for add/update item
// 'isRequired' - prop needs to be not empty
// 'sortId' - prop determines the fields sequence
//
export const tableCustomerOptions = {
	id: {
		label: "id",
		sortId: 5,
		canEdit: false,
	},
	name: {
		label: "Name",
		sortId: 10,
		canEdit: true,
		isRequired: true,
	},
	address: {
		label: "Address",
		sortId: 25,
		canEdit: true,
	},
	phone: {
		label: "Phone",
		sortId: 20,
		canEdit: true,
	}
};

export const tableProductOptions = {
	id: {
		label: "id",
		sortId: 5,
		canEdit: false,
	},
	name: {
		label: "Name",
		sortId: 10,
		canEdit: true,
		isRequired: true,
	},
	price: {
		label: "Price",
		sortId: 15,
		canEdit: true,
		type: "number"
	},
};

export const invoiceOptions = {
	id: {
		label: "id",
		sortId: 5,
		canEdit: false,
	},
	customerId: {
		label: "CustomerId",
		sortId: 10,
	},
	customerName: {
		label: "Customer",
		sortId: 12,
		canEdit: true,
	},
	discount: {
		label: "Discount",
		sortId: 15,
		canEdit: true,
		type: "number",
	},
	total: {
		label: "Total",
		sortId: 20,
		canEdit: true,
	},
};
