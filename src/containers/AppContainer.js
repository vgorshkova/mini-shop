import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Header, BaseContainer } from '../components';

export default class AppContainer extends React.Component {
	componentDidMount() {
		injectTapEventPlugin();
	}

	render() {
		return (
			<div>
				<Header />
				<BaseContainer>
					{this.props.children}
				</BaseContainer>
			</div>
		);
	}
}
