import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Header, BaseContainer, Spinner } from '../components';

class AppContainer extends React.Component {
	componentDidMount() {
		injectTapEventPlugin();
	}

	render() {
		return (
			<div>
				<Header />
				<BaseContainer>
					<div>
						{this.props.app.isFetching ? <Spinner /> : null}
						{this.props.children}
					</div>
				</BaseContainer>
			</div>
		);
	}
}

function mapStateToProps({app}) {
	return {
		app,
	};
}

export default connect(mapStateToProps, {})(AppContainer);
