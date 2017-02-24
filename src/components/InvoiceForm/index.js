import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Button } from 'react-bootstrap';
import { FieldGroup, SelectGroup } from '../../components';
import { invoiceActions, customerActions, productActions } from '../../actions';
import { tableInvoiceItemOptions } from '../../constants/options';

class InvoiceForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			invoice:{}
		};
	}

	handleChange = (propName, e) => {
		this.setState({
			invoice: {
				...this.state.item,
				[propName]: e.target.value
			}
		});
	};

	handleSelectChange= (propName, e) => {
		this.setState({
			invoice: {
				...this.state.invoice,
				[propName]: e.target.value
			}
		});
	};

	findItemById( items, itemId) {
		return items
			.filter(__ => {
				return __.id === itemId
			})
			.reduce((invoice, __) => (__), {})
			;
	}

	handleAddProduct = () => {

	};

	render() {
		const { customers, products } = this.props;

		return (
			<form>
				<FieldGroup
					key='discount_id'
					label='Discount'
					value={this.state.invoice.discount}
					placeholder={'Discount'}
					onChange={this.handleChange.bind(this, 'discount')}
				/>

				<SelectGroup
					key='customer_id'
				  label='Customer'
				  options={customers}
					placeholder='Select customer'
				  onChange={this.handleSelectChange.bind(this, 'customerId')}
				/>

				<SelectGroup
					key='product_id'
					label='Product'
					options={products}
					placeholder='Select customer'
					onChange={this.handleSelectChange.bind(this, 'customerId')}
				/>
				<Button bsStyle="primary" onClick={this.handleAddProduct} >Add</Button>

			</form>
		);
	}
}

/*
 InvoicesContainer.propTypes = {
 invoices: PropTypes.Array,
 onCreateInvoice: PropTypes.func,
 };
 */

function mapStateToProps({ customers, products }) {
	return {
		customers,
		products
	};
}

export default connect(mapStateToProps, {
	onGetCustomers: customerActions.getCustomers,
	onGetProducts: productActions.getProducts,
})(InvoiceForm);