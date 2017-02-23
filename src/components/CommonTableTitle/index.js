import React, { PropTypes } from 'react';
import { Button, PageHeader } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { ButtonWithDialog } from '../../components';
import { mode } from '../../constants/common';

export default function CommonTableTitle({ isLinked, title, fieldsOptions, onCreateItem, toCreateLink }) {
	return (
		<div>
			<PageHeader>{`${title} `}</PageHeader>
			{
				isLinked ?
					(<Link to={toCreateLink}>Create</Link>) :
					(<ButtonWithDialog
						onAction={onCreateItem}
						fieldsOptions={fieldsOptions}
						mode={mode.create}
					/>)
			}
		</div>
	)
}
