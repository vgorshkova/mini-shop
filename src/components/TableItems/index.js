import React, { PropTypes } from 'react';
import { Button, Glyphicon, Table, Grid, Row, Col } from 'react-bootstrap';
import { ButtonWithDialog } from '../../components';
import { mode } from '../../constants/common';

export default class TableItems extends React.Component {
	onDelete = (id) => {
		this.props.onDeleteItem(id);
	};

	onUpdate = (item) => {
		debugger;
		this.props.onUpdateItem(item);
	};

	render() {
		const { items, fieldsOptions, title } = this.props;

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
				<tr key={`tableItem_${item.id}`}>
					{
						propNames.map(propname => {
							return (<td key={propname}>{item[propname]}</td>);
						})
					}
					<td key={`ButtonGroup_${item.id}`}>
						<ButtonWithDialog
							onAction={this.props.onDeleteItem}
							mode={mode.delete}
							icon={<Glyphicon glyph="trash"/>}
							item={item}
						/>
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
