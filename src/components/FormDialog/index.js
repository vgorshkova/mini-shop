import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toULCase } from '../../utils/common';
import classnames from 'classnames';
import s from '../../styles/style.less';

export default class FormDialog extends React.Component {
	state = {
		showModal: false,
	};

	onClose = () => {
		this.setState({showModal: false});
	};

	onOpen = () => {
		this.setState({showModal: true});
		this.props.reset();
	};

	onAction = () => {
		if (this.props.onAction()) {
			this.onClose();
		}
	};

	render() {
		const { modalBody, mode, icon } = this.props;

		const classNames = classnames(
			icon ? s.smallIconButton : ''
		);

		return (
			<div className={s.buttonContainer}>
				<Button className={classNames} onClick={this.onOpen} >
					{
						icon ? icon : toULCase(mode)
					}
				</Button>

				<Modal show={this.state.showModal} onHide={this.onClose}>
					<Modal.Header closeButton>
						<Modal.Title>{toULCase(mode)}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{modalBody}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.onClose}>Close</Button>
						<Button onClick={this.onAction}>{toULCase(mode)}</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
