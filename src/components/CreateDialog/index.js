import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class CreateDialod extends React.Component{
	state = {
		showModal: false,
	};

	onClose = () => {
		this.setState({ showModal: false });
	};

	onOpen = () => {
		this.setState({ showModal: true });
	};

	onCreate = () => {
		this.props.onCreate();
		this.onClose();
	};

	render() {
		const { buttonTitle, modalBody, onCreate } = this.props;

		return (
			<div>
				<Button
					onClick={this.onOpen}
				>
					{buttonTitle}
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
						<Button onClick={onCreate}>Create</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
