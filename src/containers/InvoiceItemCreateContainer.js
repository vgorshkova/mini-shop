import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { InvoiceForm, BaseContainer } from '../components';
import { invoiceActions, customerActions, productActions, invoiceItemsActions } from '../actions';
import { invoiceItemNewId, invoiceNewId} from '../constants/common';

class InvoiceItemCreateContainer extends React.Component {
	componentWillMount() {
		this.props.onGetCustomers();
		this.props.onGetProducts();
		this.props.onAddInvoice({id: invoiceNewId});
		this.props.onSetInvoiceItems([]);
	}

	render() {
		return (
			<DocumentTitle title="Invoice add...">
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
	//debugger;
	return {
		customers,
		products,
		invoice: invoices.filter(__ => (__.id === invoiceNewId))[0] || {},
		invoiceItem: invoiceItems.filter(__ => (__.id === invoiceItemNewId))[0],
		invoiceItems: invoiceItems.filter(__ => (__.invoice_id === invoiceNewId))
	};
}

export default connect(mapStateToProps, {
	onGetCustomers: customerActions.getCustomers,
	onGetProducts: productActions.getProducts,
	onCreateInvoice: invoiceActions.createInvoice,
	onCreateInvoiceItem: invoiceItemsActions.createInvoiceItem,
	onUpdateInvoiceItem: invoiceItemsActions.updateInvoiceItem,
	onDeleteInvoiceItem: invoiceItemsActions.deleteInvoiceItem,
	//sync
	onAddInvoice: invoiceActions.addInvoice,
	onEditInvoice: invoiceActions.editInvoice,
	onRemoveInvoice: invoiceActions.removeInvoice,
	onAddInvoiceItem: invoiceItemsActions.addInvoiceItem,
	onRemoveInvoiceItem: invoiceItemsActions.removeInvoiceItem,
	onSetInvoiceItems: invoiceItemsActions.setInvoiceItems,
	onEditInvoiceItem: invoiceItemsActions.editInvoiceItem
})(InvoiceItemCreateContainer);

