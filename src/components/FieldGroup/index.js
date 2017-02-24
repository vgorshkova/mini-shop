import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default function FieldGroup({ id, label, help, validationState, type, ...props }) {
	return (
		<FormGroup controlId={id} validationState={validationState}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type={type || 'text'} {...props}	/>
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}
