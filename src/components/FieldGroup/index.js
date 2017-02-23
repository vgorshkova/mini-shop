import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default function FieldGroup({ id, label, help, validationState, ...props }) {
	return (
		<FormGroup controlId={id} validationState={validationState}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type='text' {...props}	/>
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}
