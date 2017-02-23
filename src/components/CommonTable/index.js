import React, { PropTypes } from 'react';
import { Button, Glyphicon, Table, Grid, Row, Col } from 'react-bootstrap';
import { ButtonWithDialog, CommonTableTitle } from '../../components';
import { Link } from 'react-router';
import { mode, tableType } from '../../constants/common';

export default function CommonTable({
	title,
	isLinked,
	items,
	fieldsOptions,
	onCreateItem, onDeleteItem, onUpdateItem,
	toCreateLink, toUpdateLink
	}) {

	if (!(items && items.length)) {
		return null;
	}

	const propNames =
		Object.keys(fieldsOptions)
			.filter(__ => ( fieldsOptions[__].canEdit ))
			.sort((a, b) => ( fieldsOptions[a].sortId - fieldsOptions[b].sortId ));

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
						onAction={onDeleteItem}
						mode={mode.delete}
						icon={<Glyphicon glyph="trash"/>}
						item={item}
					/>
					{
						isLinked ?
							<Link to={`${toUpdateLink}/${item.id}`}>Edit</Link> :
							<ButtonWithDialog
								onAction={onUpdateItem}
								fieldsOptions={fieldsOptions}
								mode={mode.update}
								icon={<Glyphicon glyph="edit"/>}
								item={item}
							/>
					}
				</td>
			</tr>
		);
	});

	return (
		<div>
			<CommonTableTitle
				isLinked={isLinked}
				title={title}
				fieldsOptions={fieldsOptions}
				onCreateItem={onCreateItem}
				toCreateLink={toCreateLink}
			/>
			<Table responsive striped bordered condensed hover>
				<thead>
				{tableHead}
				</thead>
				<tbody>
				{tableBody}
				</tbody>
			</Table>
		</div>

	)
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
