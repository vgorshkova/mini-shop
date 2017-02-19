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
		const { customers, onCreateCustomer, onGetCustomers, onDeleteCustomer } = this.props;

		return (
			<DocumentTitle title="Customers">
				<div>
					<TableHeader
						param={{name: "customers"}}
						title="Customer list"
						onCreateItem={onCreateCustomer}
						onGetList={onGetCustomers}
						onDeleteItem={onDeleteCustomer}
					/>
					<TableItems
						items={customers}
						fieldsOptions={tableCustomerOptions}
						onDeleteItem={onDeleteCustomer}
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
	onGetCustomers:customerActions.getCustomers,
	onDeleteCustomer: customerActions.deleteCustomer
})(CustomersContainer);
