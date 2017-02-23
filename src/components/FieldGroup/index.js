import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default function FieldGroup({ key, label, help, validation, ...props }) {
	return (
		<FormGroup controlId={key}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type='text' {...props}	/>
			{validation && <FormControl.Feedback />}
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}
