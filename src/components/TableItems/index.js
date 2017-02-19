import React, { PropTypes } from 'react';
import { Button, Glyphicon, Table, Grid, Row, Col } from 'react-bootstrap';

export default class TableItems extends React.Component {

	onDelete = (id) => {
		this.props.onDeleteItem(id);
	};

	render() {
		const { items, fieldsOptions } = this.props;

		if (!(items && items.length)) {
			return null;
		}

		const propNames = Object.keys(fieldsOptions).sort(( a, b ) => ( fieldsOptions[a].sortId - fieldsOptions[b].sortId ));
		const tableHead = (
			<tr>
				{
					propNames.map(propname => {
						return (<th key={`th_${propname}`}>{fieldsOptions[propname].label}</th>);
					})
				}
				<th/>
			</tr>
		);

		const tableBody = items.map((item, idx) => {
			return (
				<tr key={`tableItem_${idx}`}>
					{
						propNames.map(propname => {
							return (<td key={propname}>{item[propname]}</td>);
						})
					}
					<Button onClick={this.onDelete.bind(this, item.id)}><Glyphicon glyph="star"/></Button>
				</tr>
			);
		});

		return (
			<Grid>
				<Row>
					<Col xs={12} md={12}>
						<Table responsive striped bordered condensed hover>
							<thead>
							{tableHead}
							</thead>
							<tbody>
							{tableBody}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Grid>
		)
	}
}

/*
Table.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onItemClick: PropTypes.func.isRequired
};
*/
