import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import {FormGroup} from 'react-bootstrap';
import {FormDialog, FieldGroup} from '../components';
import { invoiceActions, customerActions, productActions } from '../actions';
import { tableInvoiceItemOptions } from '../constants/options';

import { TableItemsWithLink, TableHeaderWithLink } from '../components';


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
					<FieldGroup
						key={`discount_id`}
						id={`discount_id`}
						label={fieldsOptions.discount.label}
						validation={fieldsOptions.discount.isRequired}
						type='text'
						value={this.state.invoice.discount}
						placeholder={fieldsOptions.discount.label}
						onChange={this.handleChange.bind(this, discount)}
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

