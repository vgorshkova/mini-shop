import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toULCase } from '../../utils/common';

export default class FormDialog extends React.Component{
	state = {
		showModal: false,
	};

	onClose = () => {
		this.setState({ showModal: false });
	};

	onOpen = () => {
		this.setState({ showModal: true });
	};

	onAction = () => {
		this.props.onAction();
		this.onClose();
	};

	render() {
		const { modalBody, mode, icon } = this.props;

		return (
			<div>
				<Button	bsSize="small" onClick={this.onOpen}>
					{
						icon ? icon : toULCase( mode )
					}
				</Button>

				<Modal show={this.state.showModal} onHide={this.onClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{modalBody}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.onClose}>Close</Button>
						<Button onClick={this.onAction}>{toULCase( mode )}</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
