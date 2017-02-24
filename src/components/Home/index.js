import React from 'react';
import { connect } from 'react-redux';

class AppContainer extends React.Component {

	render() {
		const { children } = this.props;
		return (
			<div>
				<div>
					<p>Hello!</p>
					<p>Here is mini-shop application/ Try it out!</p>
				</div>
			</div>
		);
	}
}

AppContainer.propTypes = {
	children: React.PropTypes.node,
};

function mapStateToProps({ children }) {
	return {
		children,
	};
}

export default connect(mapStateToProps, {
	//onNotif: appActions.notif,
})(AppContainer);