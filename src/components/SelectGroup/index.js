import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default function SelectGroup({ key, label, options, ...props }) {
	const optionValue = 'id';
	const optionTitle = 'name';

	const optionItems = options.map( option => {
		return (
			<option
				key={`SelectGroup_option_${option[optionValue]}`}
				value={option[optionValue]}
			>
				{option[optionTitle]}
			</option>
		)
	});

	return (
			<FormGroup controlId={`SelectGroup_${key}`}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl componentClass="select" {...props}>
					{optionItems}
				</FormControl>
			</FormGroup>
	);
}
