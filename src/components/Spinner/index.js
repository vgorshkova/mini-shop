import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import s from '../../styles/style.less';

export default function Spinner(){
	return (
		<div className={s.spinnerContainer}>
			<Glyphicon className={s.glyphiconSpinning} glyph={"repeat"}/>
		</div>
	)
}
