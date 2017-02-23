import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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

