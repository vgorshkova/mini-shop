import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { CommonTable } from '../components';
import { invoiceActions, customerActions } from '../actions';
import { invoiceOptions } from '../constants/options';
import { invoiceNewId} from '../constants/common';

class InvoicesContainer extends React.Component {
	componentWillMount() {
		this.props.onGetInvoices();
		this.props.onGetCustomers();
	}

	findItemById( items, itemId) {
		return items
			.filter(__ => {
				return __.id === itemId
			})
			.reduce((invoice, __) => (__), {})
			;
	}

	render() {
		const { invoices, customers, onDeleteInvoice } = this.props;

		const items = invoices ?  invoices
			.filter(invoice => invoice.id !== invoiceNewId)
			.map(invoice => {
			const extInvoices = {...invoice};
			const customer = this.findItemById(customers, invoice.customer_id);
			extInvoices.customerName = customer ? customer.name : '';
			return extInvoices;
		}) : null	;


		return (
			<DocumentTitle title="Invoices">
				<CommonTable
					isLinked={true}
					title="Invoice list"
					items={items}
					fieldsOptions={invoiceOptions}
					toCreateLink={`invoices/create`}
					toUpdateLink={`invoices/edit`}
					onDeleteItem={onDeleteInvoice}
				/>
			</DocumentTitle>
		);
	}
}

function mapStateToProps({ invoices, customers }) {
	return {
		invoices,
		customers
	};
}

export default connect(mapStateToProps, {
	onDeleteInvoice: invoiceActions.deleteInvoice,
	onGetInvoices: invoiceActions.getInvoices,
	onGetCustomers: customerActions.getCustomers,
})(InvoicesContainer);

