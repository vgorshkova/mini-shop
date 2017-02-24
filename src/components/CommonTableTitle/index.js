import React, { PropTypes } from 'react';
import { Button, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router';
import { ButtonWithDialog } from '../../components';
import { mode } from '../../constants/common';

export default function CommonTableTitle({ isLinked, title, fieldsOptions, onCreateItem, toCreateLink }) {
	return (
		<div>
			<PageHeader>{`${title} `}
				{
					isLinked ?
						<Button href={toCreateLink}>Create</Button> :
						<ButtonWithDialog
							onAction={onCreateItem}
							fieldsOptions={fieldsOptions}
							mode={mode.create}
						/>
				}
			</PageHeader>
		</div>
	)
}
