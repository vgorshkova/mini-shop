import React, { PropTypes } from 'react';
import { Button, PageHeader } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { ButtonWithDialog } from '../../components';
import { mode } from '../../constants/common';

export default function TableHeader({ title, fieldsOptions, onCreateItem, onGetList, onDeleteItem }) {
	return (
		<Grid>
			<Row>
				<Col xs={12} md={12}>
					<PageHeader>{`${title} `}
						<ButtonWithDialog
							onAction={onCreateItem}
							fieldsOptions={fieldsOptions}
						  mode={mode.create}
						/>
						<Button onClick={onGetList}>Refresh</Button>
					</PageHeader>
				</Col>
			</Row>
		</Grid>
	)
}
