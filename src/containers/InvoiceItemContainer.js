import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { TableItemsWithLink, TableHeaderWithLink } from '../components';
import { invoiceActions, customerActions, productActions } from '../actions';
import { tableInvoiceOptions } from '../constants/options';

class InvoicesContainer extends React.Component {
	componentWillMount() {
		//this.props.onGetInvoices();
		this.props.onGetCustomers();
		this.setState({
			// route components are rendered with useful information, like URL params
			invoice: this.findItemById(this.props.invoices, this.props.params.invoiceId)
		});
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
		const { customers, products } = this.props;
		const { invoice } = this.state;

		const items = invoices.map( invoice => {
			const extInvoices = {...invoice};
			extInvoices.customerName = this.findItemById(customers, invoice.id).name;
			return extInvoices;
		});

		return (
			<DocumentTitle title="Invoice item">
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

function mapStateToProps({ invoices, customers, products }) {
	return {
		invoices,
		customers,
		products
	};
}

export default connect(mapStateToProps, {
	onDeleteInvoice: invoiceActions.deleteInvoice,
	onGetInvoices: invoiceActions.getInvoices,
	onGetCustomers: customerActions.getCustomers,
	onGetProducts: productActions.getProducts,
})(InvoicesContainer);

