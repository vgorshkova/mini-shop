import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, PageHeader } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

export default function TableHeaderWithLink({ title, toCreateLink }) {
	return (
		<Grid>
			<Row>
				<Col xs={12} md={12}>
					<PageHeader>
						{`${title} `}
						<h3><Link to={toCreateLink}>Create</Link></h3>
					</PageHeader>
				</Col>
			</Row>
		</Grid>
	)
}
