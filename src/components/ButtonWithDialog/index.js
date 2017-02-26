import React from 'react';
import {FormGroup} from 'react-bootstrap';
import {FormDialog, FieldGroup} from '../../components';
import {mode as Mode} from '../../constants/common';

export default class ButtonWithDialog extends React.Component {
	constructor(props) {
		super(props);
		const { fieldsOptions } = this.props;

		if (fieldsOptions) {
			this.propNames = Object.keys(fieldsOptions)
				.filter(field => ( fieldsOptions[field].canEdit ))
				.sort((a, b) => ( fieldsOptions[a].sortId - fieldsOptions[b].sortId ));

			this.isRequiredProps = Object.keys(fieldsOptions).filter(field => ( fieldsOptions[field].isRequired ));
		}
		this.state = {
			item: {}
		};
	}

	initState(props) {
		const { fieldsOptions, mode, item } = props;
		if (fieldsOptions) {
			if (mode === Mode.create) {
				this.setState({
					item: this.propNames.reduce((item, propName) => {
						item[propName] = '';
						return item;
					}, {})
				});
			}
		}

		if (mode === Mode.update || mode === Mode.delete) {
			this.setState({
				item: {...item}
			});
		}
	}

	componentWillMount() {
		this.initState(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.initState(nextProps);
	}

	validate = (propName) => {
		let isValid;
		if (propName) {
			isValid = this.state.item[propName] !== '';
		} else {
			isValid = this.isRequiredProps.reduce((isValid, requiredProp) => {
				return isValid && (this.state.item[requiredProp] !== '')
			}, true);
		}
		return isValid;
	};

	getValidationState = (propName) => {
		const isValid = this.validate(propName);

		if (isValid) {
			return 'success';
		} else {
			return 'error';
		}
	};

	handleChange = (propName, e) => {
		this.setState({
			item: {
				...this.state.item,
				[propName]: e.target.value
			}
		});
	};

	onAction = () => {
		if (this.props.mode === Mode.delete || this.validate()) {

			this.props.onAction(this.state.item);
			return true;
		}

		return false;
	};

	reset = () => {
		this.initState(this.props);
	};

	render() {
		const {fieldsOptions, mode, icon} = this.props;
		let modalBodyElements = {};

		if (mode === Mode.update || mode === Mode.create) {
			modalBodyElements = this.propNames.map(propName => (
				<FieldGroup
					key={`${fieldsOptions[propName].label}_id`}
					id={`${fieldsOptions[propName].label}_id`}
					label={fieldsOptions[propName].label}
					type={fieldsOptions[propName].type}
					validationState={this.isRequiredProps.indexOf(propName) !== -1 ? this.getValidationState(propName) : null}
					value={this.state.item[propName]}
					placeholder={fieldsOptions[propName].label}
					onChange={this.handleChange.bind(this, propName)}
				/>
			));
		}

		if (mode === Mode.delete) {
			modalBodyElements = (<p>Are you sure you want to delete this item?</p>);
		}

		const modalBody = (
			<form>
				<FormGroup controlId='controlId'>
					{modalBodyElements}
				</FormGroup>
			</form>
		);
		return (
			<FormDialog mode={mode} icon={icon} onAction={this.onAction} reset={this.reset} modalBody={modalBody}/>
		)
	}
}
