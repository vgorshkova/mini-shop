import React from 'react';
import { connect } from 'react-redux';
import { Home } from '../components/Home';

class AppContainer extends React.Component {

	render() {
		const { children } = this.props;
		return (
			<DocumentTitle title="Home">
				<div>
					<Home />
					{children}
				</div>
			</DocumentTitle>
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

