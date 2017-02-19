import React, { PropTypes } from 'react';
import { Button, PageHeader } from 'react-bootstrap';
//import { BaseContainer } from '../../components';
import { Grid, Row, Col } from 'react-bootstrap';
import { CreateCustomer } from '../../components';

export default function TableHeader({ param, title, onCreateItem, onGetList, onDeleteItem }) {
	return (
		<Grid>
			<Row>
				<Col xs={12} md={12}>
					<PageHeader>{`${title} `}
						{
							param.name === 'customers' ? <CreateCustomer onCreateItem={onCreateItem}/> :
								param.name === 'products' ? <CreateProduct onCreateItem={onCreateItem}/> :
									null
						}
						<Button onClick={onGetList}>Refresh</Button>
						<Button onClick={onDeleteItem}>Delete</Button>
					</PageHeader>
				</Col>
			</Row>
		</Grid>
	)
}
