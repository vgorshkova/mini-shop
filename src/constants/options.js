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
		canEdit: true,
	},
	customerId: {
		label: "CustomerId",
		sortId: 10,
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
	},
};

export const invoiceItemOptions = {
	id: {
		label: "id",
		sortId: 5,
		canEdit: true,
	},
	invoiceId: {
		label: "InvoiceId",
		sortId: 10,
	},
	productId: {
		label: "productId",
		sortId: 15,
	},
	count: {
		label: "Count",
		sortId: 20,
		canEdit: true,
		type: "number",
	},
};
