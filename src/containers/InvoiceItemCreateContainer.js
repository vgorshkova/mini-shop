import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { FormGroup } from 'react-bootstrap';
import { InvoiceForm, BaseContainer } from '../components';
import { invoiceActions, customerActions, productActions } from '../actions';
import { tableInvoiceItemOptions } from '../constants/options';
import { RoutesNames } from '../constants/RoutesNames';

class InvoiceItemCreateContainer extends React.Component {
	componentWillMount() {
		this.props.onGetCustomers();
		this.props.onGetProducts();
	}

	render() {
		const { customers, products } = this.props;

		return (
			<DocumentTitle title="Invoice add...">
				<BaseContainer>
					<InvoiceForm
						customers={customers}
						products={products}
					/>
				</BaseContainer>
			</DocumentTitle>
		);
	}
}

function mapStateToProps({ customers, products }) {
	return {
		customers,
		products
	};
}

export default connect(mapStateToProps, {
	onGetCustomers: customerActions.getCustomers,
	onGetProducts: productActions.getProducts,
})(InvoiceItemCreateContainer);

