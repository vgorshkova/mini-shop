import React, { PropTypes } from 'react';
import { FormGroup } from 'react-bootstrap';
import { FormDialog, FieldGroup } from '../../components';
import { mode as Mode } from '../../constants/common';

export default class ButtonWithDialog extends React.Component{
	constructor(props) {
		super(props);
		const { fieldsOptions, mode, item } = this.props;
		this.propNames = Object.keys(fieldsOptions)
			.filter( field => ( fieldsOptions[field].canEdit ))
			.sort(( a, b ) => ( fieldsOptions[a].sortId - fieldsOptions[b].sortId ));

		if( mode === Mode.create ) {
			this.propNames.forEach(propName => {
				this.state = {
					[propName]: '',
				};
			});
		}

		if( mode === Mode.update ) {
			this.state = { ...item };
		}
	}

	getValidationState = () => {
		if (this.state.name ) {
			return 'success';
		} else {
			return 'error';
		}
	};

	handleChange = (propName, e) => {
		this.setState({
			[propName]: e.target.value
		});
	};

	clear() {
		this.propNames.forEach(propName => {
			this.setState = {
				[propName]: '',
			};
		})
	}

	onAction = () => {
		this.props.onAction(this.state);
		this.clear();
	};

	render() {
		const { fieldsOptions, mode, icon } = this.props;
		const formGroups = this.propNames.map( propName => (
			<FieldGroup
				key={`${fieldsOptions[propName].label}_id`}
				id={`${fieldsOptions[propName].label}_id`}
				label={fieldsOptions[propName].label}
				validation={fieldsOptions[propName].isRequired}
				type="text"
				value={this.state[propName]}
				placeholder={fieldsOptions[propName].label}
				onChange={this.handleChange.bind(this, propName)}
			/>
		));
		const modalBody = (
			<form>
				<FormGroup
					controlId={fieldsOptions.name.label}
					validationState={this.getValidationState()}
				>
					{formGroups}
				</FormGroup>
			</form>
		);
		return (
			<FormDialog mode={mode} icon={icon} onAction={this.onAction} modalBody={modalBody} />
		)
	}
}
