import React from 'react';
import { Link } from 'react-router';
import { Button, PageHeader } from 'react-bootstrap';
import { ButtonWithDialog } from '../../components';
import { mode } from '../../constants/common';
import s from '../../styles/style.less';

export default function CommonTableTitle({ isLinked, title, fieldsOptions, onCreateItem, toCreateLink }) {
	return (
		<div>
			<PageHeader>{`${title} `}
				{
					isLinked ?
						<Button><Link className={s.buttonLink} to={toCreateLink}>Create</Link></Button> :
						<ButtonWithDialog
							onAction={onCreateItem}
							fieldsOptions={fieldsOptions}
							mode={mode.create}
						/>
				}
			</PageHeader>
		</div>
	)
}
