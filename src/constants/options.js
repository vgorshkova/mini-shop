//
// 'label' - the label name
// 'canEdit' - prop will be showen on the form/dialog for add/update item
// 'isRequired' - prop needs to be not empty
// 'sortId' - prop determines the fields sequence
//
export const tableCustomerOptions = {
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
