import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function BaseContainer ({ children }) {
	return (
		<Grid>
			<Row>
				<Col xs={12} md={12}>
					{children}
				</Col>
			</Row>
		</Grid>
	);
}

