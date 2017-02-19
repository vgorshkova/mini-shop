import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Header } from '../components';

@connect(null, null)
export default class AppContainer extends React.Component {
	componentDidMount() {
		injectTapEventPlugin();
	}

	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
}

/*AppContainer.propTypes = {
	children: React.PropTypes.node,
	location: React.PropTypes.object,
	routes: React.PropTypes.array,
	params: React.PropTypes.object,
};

function mapStateToProps({ children, location, routes, params }) {
	return {
		children,
		location,
		routes,
		params
	};
}

export default connect(mapStateToProps, {
	//onNotif: appActions.notif,
})(AppContainer);
 */