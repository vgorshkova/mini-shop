import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { InvoiceForm, BaseContainer } from '../components';
import { invoiceActions, customerActions, productActions, invoiceItemsActions } from '../actions';
import { invoiceItemNewId, invoiceNewId} from '../constants/common';

class InvoiceItemEditContainer extends React.Component {
	componentWillMount() {
		this.props.onGetCustomers();
		this.props.onGetProducts();
		this.props.onGetInvoice(this.props.params.invoiceId);
		this.props.onGetInvoiceItems(this.props.params.invoiceId);
	}

	render() {
		return (
			<DocumentTitle title="Invoice edit...">
				<BaseContainer>
					{
						<InvoiceForm  {...this.props}	/>
					}
				</BaseContainer>
			</DocumentTitle>
		);
	}
}

function mapStateToProps({ customers, products, invoices, invoiceItems }) {
	return {
		customers,
		products,
		invoice: invoices[0] || {},
		invoiceItem: invoiceItems.filter(__ => (__.id === invoiceItemNewId))[0],
		invoiceItems: invoiceItems
	};
}

export default connect(mapStateToProps, {
	onGetCustomers: customerActions.getCustomers,
	onGetProducts: productActions.getProducts,
	onUpdateInvoice: invoiceActions.updateInvoice,
	onCreateInvoiceItem: invoiceItemsActions.createInvoiceItem,
	onUpdateInvoiceItem: invoiceItemsActions.updateInvoiceItem,
	onDeleteInvoiceItem: invoiceItemsActions.deleteInvoiceItem,
	//sync
	onGetInvoice: invoiceActions.getInvoice,
	onEditInvoice: invoiceActions.editInvoice,
	onRemoveInvoice: invoiceActions.removeInvoice,
	onAddInvoiceItem: invoiceItemsActions.addInvoiceItem,
	onRemoveInvoiceItem: invoiceItemsActions.removeInvoiceItem,
	onGetInvoiceItems: invoiceItemsActions.getInvoiceItems,
	onEditInvoiceItem: invoiceItemsActions.editInvoiceItem
})(InvoiceItemEditContainer);




/*import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import {FormGroup} from 'react-bootstrap';
import {FormDialog, FieldGroup} from '../components';
import { invoiceActions, customerActions, productActions } from '../actions';
import { tableInvoiceItemOptions } from '../constants/options';
import { RoutesNames } from '../constants/RoutesNames';

class InvoiceItemEditContainer extends React.Component {
	componentWillMount() {
		//this.props.onGetInvoices();
		debugger;
		this.props.onGetCustomers();

		if (this.props.routes[1].name === RoutesNames.editInvoice){
			this.setState({
				invoice: this.findItemById(this.props.invoices, this.props.params.invoiceId)
			});
		}
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
})(InvoiceItemEditContainer);

*/