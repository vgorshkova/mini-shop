import React from 'react';
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import s from '../../styles/style.less';

export default function SelectGroup({
	id, label,
	options,
	horizontal,
	small,
	...props })
{
	const optionValue = 'id';
	const optionTitle = 'name';

	const optionItems =[
		<option
			key={'SelectGroup_option_default_id'}
			value={'default'}
		  className={s.selectDefaultOption}
		>
			{props.placeholder}
		</option>];
	optionItems.push(options.map( option => {
		return (
			<option
				key={`SelectGroup_option_${option[optionValue]}`}
				value={option[optionValue]}
			>
				{option[optionTitle]}
			</option>
		)
	}));

	const sm1Width = 2;
	const sm2Width = small? 4 : 10;

	return (
		horizontal ?
			<FormGroup controlId={id} >
				<Col componentClass={ControlLabel} sm={sm1Width}>{label}</Col>
				<Col sm={sm2Width}>
					<FormControl componentClass="select" {...props} >
						{optionItems}
					</FormControl>
				</Col>

			</FormGroup>
			:
			<FormGroup controlId={`SelectGroup_${key}`}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl componentClass="select" {...props}>
					{optionItems}
				</FormControl>
			</FormGroup>
	);
}
