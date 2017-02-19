import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { CreateDialog } from '../../components';

//export default function CreateCustomer({ onCreateItem })

export default class CreateCustomer extends React.Component{
	state = {
		name: '',
		address: '',
		phone: '',
	};

	getValidationState = () => {
		if (this.state.name ) {
			return 'success';
		} else {
			return 'error';
		}
	};

	handleChangeName = (e) => {
		this.setState({
			name: e.target.value
		});
	};

	handleChangeAddress = (e) => {
		this.setState({
			address: e.target.value
		});
	};

	handleChangePhone = (e) => {
		this.setState({
			phone: e.target.value
		});
	};

	onCreate = () => {
		this.props.onCreateItem({
			name: this.customerName.value,
			address: this.customerAddress.value,
			phone: this.customerPhone.value,
		});
	};

	render() {
		const modalBody = (
			<form>
				<FormGroup
					controlId="customerName"
					validationState={this.getValidationState()}
				>
					<ControlLabel>Name</ControlLabel>
					<FormControl
						type="text"
						value={this.state.name}
						placeholder="Customer name"
						onChange={this.handleChangeName}
						inputRef={ref => { this.customerName = ref; }}
					/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup
					controlId="customerAddress"
				>
					<ControlLabel>Address</ControlLabel>
					<FormControl
						type="text"
						value={this.state.address}
						placeholder="Customer address"
						onChange={this.handleChangeAddress}
						inputRef={ref => { this.customerAddress = ref; }}
					/>
				</FormGroup>

				<FormGroup
					controlId="customerPhone"
				>
					<ControlLabel>Phone</ControlLabel>
					<FormControl
						type="text"
						value={this.state.phone}
						placeholder="Customer phone"
						onChange={this.handleChangePhone}
						inputRef={ref => { this.customerPhone = ref; }}
					/>
				</FormGroup>
			</form>
		);
		return (
			<CreateDialog onCreate={this.onCreate} buttonTitle="Create customer" modalBody={modalBody} />
		)
	}
}
