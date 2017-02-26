import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { CommonTable, Spinner } from '../components';
import { customerActions } from '../actions';
import { tableCustomerOptions } from '../constants/options';

class CustomersContainer extends React.Component {
	componentWillMount() {
		this.props.onGetCustomers();
	}

	render() {
		const { app, customers, onCreateCustomer, onDeleteCustomer,  onUpdateCustomer } = this.props;

		return (
			<DocumentTitle title="Customers">
				<div>
					{app.isFetching ? <Spinner /> : null}
					<CommonTable
						title="Customer list"
						items={customers}
						fieldsOptions={tableCustomerOptions}
						onCreateItem={onCreateCustomer}
						onDeleteItem={onDeleteCustomer}
						onUpdateItem={onUpdateCustomer}
					/>
				</div>
			</DocumentTitle>
		);
	}
}

function mapStateToProps({customers, app}) {
	return {
		customers,
		app,
	};
}

export default connect(mapStateToProps, {
	onCreateCustomer: customerActions.createCustomer,
	onGetCustomers: customerActions.getCustomers,
	onUpdateCustomer: customerActions.updateCustomer,
	onDeleteCustomer: customerActions.deleteCustomer
})(CustomersContainer);
