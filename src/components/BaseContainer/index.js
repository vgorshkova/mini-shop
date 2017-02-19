import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

function BaseContainer () {
	return (
		<Grid>
			<Row>
				<Col xs={12} md={12}>
					{this.props.children}
				</Col>
			</Row>
		</Grid>
	);
}

export default BaseContainer;