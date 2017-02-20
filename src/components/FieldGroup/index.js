import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, validation, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{validation && <FormControl.Feedback />}
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

export default FieldGroup;
