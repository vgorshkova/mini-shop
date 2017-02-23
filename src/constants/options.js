//
// 'label' - the label name
// 'canEdit' - prop will be showen on the form/dialog for add/update item
// 'isRequired' - prop needs to be not empty
// 'sortId' - prop determines the fields sequence
//
export const tableCustomerOptions = {
	id: {
		label: "id",
		sortId: 5
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
		label: "#",
		sortId: 5
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
	},
};

export const tableInvoiceOptions = {
	id: {
		label: "id",
		sortId: 5
	},
	customerId: {
		label: "CustomerId",
		sortId: 10,
	},
	customerName: {
		label: "Customer",
		sortId: 10,
		canEdit: true,
		isRequired: true,
	},
	discount: {
		label: "Discount",
		sortId: 15,
		canEdit: true,
	},
	total: {
		label: "Total",
		sortId: 20,
		canEdit: true,
	},
};

export const tableInvoiceItemOptions = {
	id: {
		label: "id",
		sortId: 5
	},
	invoiceId: {
		label: "InvoiceId",
		sortId: 10,
	},
	discount: {
		label: "Discount",
		sortId: 15,
		canEdit: true,
	},
	customerName: {
		label: "Customer",
		sortId: 20,
		canEdit: true,
		isRequired: true,
	},
	total: {
		label: "Total",
		sortId: 25,
	},

};

export const invoiceItemProductLine = {
	productId: {
		label: "ProdustId",
			sortId: 5,
	},
	productName: {
		label: "Name",
		sortId: 10,
		canEdit: true,
		isRequired: true,
	},
	quantity: {
		label: "Quantity",
			sortId: 15,
			canEdit: true,
	},
	ProductPrice: {
		label: "Price",
		sortId: 20,
		canEdit: true,
	},
};