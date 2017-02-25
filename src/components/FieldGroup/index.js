import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col } from 'react-bootstrap';

export default function FieldGroup({
	id, label,
	help,
	validationState,
	type,
	horizontal,
	small,
	...props })
{
	const sm1Width = 2;
	const sm2Width = small? 2 : 10;

	return (
		horizontal ?
			<FormGroup controlId={id} validationState={validationState}>
				<Col componentClass={ControlLabel} sm={sm1Width}>{label}</Col>
				<Col sm={sm2Width}><FormControl type={type || 'text'} {...props}  /></Col>
				{help	&& <Row><Col smOffset={sm1Width} sm={sm2Width}><HelpBlock>{help}</HelpBlock></Col></Row>}
			</FormGroup>
			:
			<FormGroup controlId={id} validationState={validationState}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl type={type || 'text'} {...props}  />
				{help && <HelpBlock>{help}</HelpBlock>}
			</FormGroup>
	);
}
