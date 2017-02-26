import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button, Col, Table, Glyphicon } from 'react-bootstrap';
import { FieldGroup, SelectGroup, ButtonWithDialog } from '../../components';
import { invoiceActions, customerActions, productActions, invoiceItemsActions } from '../../actions';
import { tableInvoiceItemOptions } from '../../constants/options';
import s from '../../styles/style.less';
import { mode, defaultSelectValue } from '../../constants/common';

const invoiceItemNewId = 'newId';

export default class InvoiceForm extends React.Component {
	findItemById(items, itemId) {
		return items
			.filter(__ => {
				return __.id == itemId
			})
			.reduce((invoice, __) => (__), {})
			;
	}

	handleChange = (propName, e) => {
		this.props.onEditInvoice({...this.props.invoice, [propName]: e.target.value})
	};

	handleQuantityChange = (item, e) => {
		const quantity = e.target.value
		this.props.onEditInvoiceItem({...item, quantity});
	};

	handleSelectChange = (propName, e) => {
		// ?
		const value = {[propName]: e.target.value === defaultSelectValue ? undefined: e.target.value};

		switch(propName) {
			case 'customerId':
				this.props.onEditInvoice({...this.props.invoice, ...value});
				break;
			case 'productId':
				this.props.invoiceItem ?
					this.props.onEditInvoiceItem({...this.props.invoiceItem, ...value}) :
					this.props.onAddInvoiceItem({...{id: invoiceItemNewId}, ...value});
				break;
		}
	};

	handleAddInvoiceItem = () => {
		this.props.onAddInvoiceItem({
			id: `${invoiceItemNewId}_${this.props.invoiceItems.length}`,
			invoiceId: this.props.invoice.id,
			productId: this.props.invoiceItem.productId,
			quantity: 1
		});
	};

	countTotal() {
		const discount = this.props.invoice.discount || 0;
		let result = this.props.invoiceItems.reduce((total, invoice) => {
			const productPrice = this.findItemById(this.props.products, invoice.productId).price;
			return (total * 100 + productPrice * 100 * invoice.quantity)/100;
		}, 0);

		result = result * 100 * (100 - discount) / 10000

		return result.toFixed(2);
	}

	render() {
		if (!this.props.invoice) {
			return null;
		}

		const { customers, products } = this.props;

		const tableBody = this.props.invoiceItems.map((item, idx) => {
			const product = this.findItemById(products, item.productId);
			return (
				<tr key={`tableItem_${item.id}`}>
					<td>{idx + 1}</td>
					<td>{product.name}</td>
					<td>{product.price}</td>
					<td key={`quantity_${item.id}`}>
						<FormControl type='number' onChange={this.handleQuantityChange.bind(this, item)} defaultValue={item.quantity || 1} />
					</td>
					<td key={`ButtonGroup_${item.id}`} className={s.tdButtons}>
						<ButtonWithDialog
							onAction={this.props.onRemoveInvoiceItem}
							mode={mode.delete}
							icon={<Glyphicon glyph="trash"/>}
							item={item}
						/>
					</td>
				</tr>
			);
		});

		const tableHeadTitleNames = ['Name', 'Price', 'Qty'];
		const tableHead = (
			<tr>
				<th>#</th>
				{
					tableHeadTitleNames.map(propname => {
						return (<th key={`th_${propname}`}>{propname}</th>);
					})
				}
				<th/>
			</tr>
		);

		return (
			<Form horizontal>
				<FieldGroup
					key='discount_id'
					id='discount_id'
					label='Discount'
					type="number"
					value={this.props.invoice.discount}
					placeholder={'Discount'}
					onChange={this.handleChange.bind(this, 'discount')}
					horizontal={true}
					small={true}
				/>

				<SelectGroup
					key='customer_id'
					id='customer_id'
				  label='Customer'
				  options={customers}
					placeholder='Select customer...'
				  onChange={this.handleSelectChange.bind(this, 'customerId')}
					horizontal={true}
					small={true}
				/>

				<SelectGroup
					key='product_id'
					id='product_id'
					label='Add product'
					options={products}
					placeholder='Select product...'
					onChange={this.handleSelectChange.bind(this, 'productId')}
					horizontal={true}
					small={true}
				/>

				<Button bsStyle="primary" onClick={this.handleAddInvoiceItem} >Add</Button>

				<Table responsive>
					<thead>
						{tableHead}
					</thead>
					<tbody>
						{tableBody}
					</tbody>
				</Table>

				<h2><Col sm={2}>Total</Col><Col sm={2} className={s.totalValue} >{this.countTotal()}</Col></h2>

			</Form>
		);
	}
}
