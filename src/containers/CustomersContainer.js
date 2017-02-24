import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { CommonTable } from '../components';
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
					<CommonTable
						title="Customer list"
						items={customers}
						fieldsOptions={tableCustomerOptions}
						onCreateItem={onCreateCustomer}
						onDeleteItem={onDeleteCustomer}
					  onUpdateItem={onUpdateCustomer}
					/>
			</DocumentTitle>
		);
	}
}

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
