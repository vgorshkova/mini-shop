import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { TableItemsWithLink, TableHeaderWithLink } from '../components';
import { invoiceActions, customerActions } from '../actions';
import { tableInvoiceOptions } from '../constants/options';

class InvoicesContainer extends React.Component {
	componentWillMount() {
		//this.props.onGetInvoices();
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

		const items = invoices.map( invoice => {
			const extInvoices = {...invoice};
			const customer = this.findItemById(customers, invoice.customerId);
			extInvoices.customerName =	customer ? customer.name: '';
			return extInvoices;
		});

		return (
			<DocumentTitle title="Invoices">
				<div>
					<TableHeaderWithLink
						title="Invoice list"
						fieldsOptions={tableInvoiceOptions}
					  toCreateLink={`invoice/create`}
					/>
					<TableItemsWithLink
						items={items}
						fieldsOptions={tableInvoiceOptions}
						onDeleteItem={onDeleteInvoice}
						toUpdateLink={`invoice/edit`}
					/>
				</div>
			</DocumentTitle>
		);
	}
}

/*
 InvoicesContainer.propTypes = {
 invoices: PropTypes.Array,
 onCreateInvoice: PropTypes.func,
 };
 */

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

