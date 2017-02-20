import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { TableItems, TableHeader } from '../components';
import { customerActions } from '../actions';
import { tableCustomerOptions } from '../constants/options';

class CustomersContainer extends React.Component {
	componentWillMount() {
		this.props.onGetCustomers();
	}

	render() {
		const { customers, onCreateCustomer, onGetCustomers, onDeleteCustomer,  onUpdateCustomer } = this.props;

		return (
			<DocumentTitle title="Customers">
				<div>
					<TableHeader
						title="Customer list"
						fieldsOptions={tableCustomerOptions}
						onCreateItem={onCreateCustomer}
						onGetList={onGetCustomers}
						onDeleteItem={onDeleteCustomer}
					/>
					<TableItems
						items={customers}
						fieldsOptions={tableCustomerOptions}
						onDeleteItem={onDeleteCustomer}
					  onUpdateItem={onUpdateCustomer}
					/>
				</div>
			</DocumentTitle>
		);
	}
}

/*
CustomersContainer.propTypes = {
	customers: PropTypes.Array,
	onCreateCustomer: PropTypes.func,
};
*/

function mapStateToProps({ customers }) {
	return {
		customers,
	};
}

export default connect(mapStateToProps, {
	onCreateCustomer: customerActions.createCustomer,
	onGetCustomers: customerActions.getCustomers,
	onUpdateCustomer: customerActions.updateCustomer,
	onDeleteCustomer: customerActions.deleteCustomer
})(CustomersContainer);
