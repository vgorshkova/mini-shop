import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import TableItems from '../components/TableItems';

function mapStateToProps({ customers }) {
	return {
		products,
	};
}
@connect(mapStateToProps, null)

export default class ProductsContainer extends React.Component {
	render() {
		const { products, onProductClick } = this.props;
		return (
			<DocumentTitle title="Products">
				<TableItems items={products} onItemClick={()=>{}} />
			</DocumentTitle>
		);
	}
}
