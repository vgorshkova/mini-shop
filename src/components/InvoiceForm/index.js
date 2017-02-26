import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { Form, FormGroup, FormControl, Button, Col, Table, Glyphicon } from 'react-bootstrap';
import { FieldGroup, SelectGroup, ButtonWithDialog } from '../../components';
import { invoiceActions, customerActions, productActions, invoiceItemsActions } from '../../actions';
import { tableInvoiceItemOptions } from '../../constants/options';
import s from '../../styles/style.less';
import { mode, defaultSelectValue, invoiceItemNewId } from '../../constants/common';

export default class InvoiceForm extends React.Component {
	routeConfirm = false;

	constructor(props) {
		super(props);
		this.state = {
			selectedProductId: null
		}
	}

	findItemById(items, itemId) {
		return items
			.filter(__ => {
				return __.id == itemId
			})
			.reduce((invoice, __) => (__), {})
			;
	}

	componentWillMount () {
		const { router, route	} = this.props;
		this.routeConfirm = false;
		router.setRouteLeaveHook(route, this.routerWillLeave);
	}

	routerWillLeave = (nextLocation) => {
		return this.routeConfirm || 'Are you sure you want to cancel create invoice?'
	};

	handleChange = (propName, e) => {
		this.props.onEditInvoice({...this.props.invoice, [propName]: e.target.value})
	};

	handleQuantityChange = (item, e) => {
		const quantity = e.target.value;
		this.props.onEditInvoiceItem({...item, quantity});
	};

	handleSelectChange = (propName, e) => {
		const value = {[propName]: e.target.value === defaultSelectValue ? undefined: e.target.value};

		switch(propName) {
			case 'customer_id':
				this.props.onEditInvoice({...this.props.invoice, ...value});
				break;
			case 'product_id':
				this.setState({
					selectedProductId: e.target.value
				});
				break;
		}
	};

	handleAddInvoiceItem = () => {
		this.props.onAddInvoiceItem({
			id: `${invoiceItemNewId}_${this.props.invoiceItems.length}`,
			invoice_id: this.props.invoice.id,
			product_id: this.state.selectedProductId,
			quantity: 1
		});
	};

	handleOk = () => {
		const action = this.props.onCreateInvoice || this.props.onUpdateInvoice;
		action(
			{...this.props.invoice, total: this.countTotal()},
			this.props.invoiceItems.filter(item => item.invoice_id === this.props.invoice.id),
			this.props.initialInvoiceItems);
		this.routeConfirm = true;
		browserHistory.push('/invoices');
	};


	countTotal() {
		const discount = this.props.invoice.discount || 0;
		let result = this.props.invoiceItems.reduce((total, invoice) => {
			const productPrice = this.findItemById(this.props.products, invoice.product_id).price;
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
			const product = this.findItemById(products, item.product_id);
			return (
				<tr key={`tableItem_${item.id}`}>
					<td>{idx + 1}</td>
					<td>{product.name}</td>
					<td>{product.price}</td>
					<td key={`quantity_${item.id}`}>
						<FormControl type='number' onChange={this.handleQuantityChange.bind(this, item)} defaultValue={item.quantity || 1}/>
					</td>
					<td key={`ButtonRemove_${item.id}`} className={s.tdButtons}>
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
					value={this.props.invoice.discount || ""}
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
					value={this.props.invoice.customer_id || ""}
				  onChange={this.handleSelectChange.bind(this, 'customer_id')}
					horizontal={true}
					small={true}
				/>

				<SelectGroup
					key='product_id'
					id='product_id'
					label='Add product'
					options={products}
					placeholder='Select product...'
					onChange={this.handleSelectChange.bind(this, 'product_id')}
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

				<Col sm={2}><h2>Total</h2></Col><Col sm={10} className={s.totalValue} ><h2>{this.countTotal()}</h2></Col>

				<Col sm={4} xsOffset={4} xs={4}>
					<Button className={s.button} ><Link className={s.buttonLink} to={'/invoices'}>Cancel</Link></Button>
					<Button bsStyle="primary" className={s.button} onClick={this.handleOk}>OK</Button>
				</Col>

			</Form>
		);
	}
}
