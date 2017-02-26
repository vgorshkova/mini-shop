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