import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button, Col, Table, Glyphicon } from 'react-bootstrap';
import { FieldGroup, SelectGroup, ButtonWithDialog } from '../../components';
import { invoiceActions, customerActions, productActions, invoiceItemsActions } from '../../actions';
import { tableInvoiceItemOptions } from '../../constants/options';
import s from '../../styles/style.less';
import { mode } from '../../constants/common';

const invoiceItemNewId = 'newId';

export default class InvoiceForm extends React.Component {
	findItemById(items, itemId) {
		debugger;
		return items
			.filter(__ => {
				return __.id == itemId
			})
			.reduce((invoice, __) => (__), {})
			;
	}

	handleChange = (propName, e) => {
		debugger;
		this.props.onEditInvoice({...this.props.invoice, [propName]: e.target.value})
	};

	handleQuantityChange = (item, e) => {
		this.props.onUpdateInvoiceItem(item.invoiceId, {...item, quantity: e.target.value});
	};

	handleSelectChange = (propName, e) => {
		switch(propName) {
			case 'customerId':
				this.props.onEditInvoice({...this.props.invoice, [propName]: e.target.value});
				break;
			case 'productId':
				debugger;
				this.props.invoiceItem ?
					this.props.onEditInvoiceItem({...this.props.invoiceItem, [propName]: e.target.value}) :
					this.props.onAddInvoiceItem({...{id: invoiceItemNewId}, [propName]: e.target.value});
				break;
		}
	};

	handleAddInvoiceItem = () => {
		debugger;
		this.props.onAddInvoiceItem({
			id: `${invoiceItemNewId}_${this.props.invoiceItems.length}`,
			invoiceId: this.props.invoice.id,
			productId: this.props.invoiceItem.productId,
			quantity: 1
		})
	};

	render() {
		if (!this.props.invoice) {
			return null;
		}

		const { customers, products } = this.props;

		const tableBody = this.props.invoiceItems.map((item, idx) => {
			debugger;
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

				<h2><Col sm={2}>Total</Col><Col sm={2}>{this.props.invoice.total}</Col></h2>

			</Form>
		);
	}
}
