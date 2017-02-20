import React, { PropTypes } from 'react';
import { Button, Glyphicon, Table, Grid, Row, Col } from 'react-bootstrap';
import { ButtonWithDialog } from '../../components';
import { mode } from '../../constants/common';

export default class TableItems extends React.Component {
	onDelete = (id) => {
		this.props.onDeleteItem(id);
	};

	/*onUpdate = (item) => {
		this.props.onUpdateItem(item);
	};*/

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
					<td>
						<Button bsSize="small" onClick={this.onDelete.bind(this, item.id)}><Glyphicon glyph="trash"/></Button>
						<ButtonWithDialog
							onAction={this.props.onUpdateItem}
							fieldsOptions={fieldsOptions}
							mode={mode.update}
						  icon={<Glyphicon glyph="edit"/>}
						  item={item}
						/>
					</td>
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
