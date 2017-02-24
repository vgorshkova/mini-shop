import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { CommonTable } from '../components';
import { productActions } from '../actions';
import { tableProductOptions } from '../constants/options';

class ProductsContainer extends React.Component {
	componentWillMount() {
		this.props.onGetProducts();
	}

	render() {
		const { products, onCreateProduct, onGetProducts, onDeleteProduct,  onUpdateProduct } = this.props;

		return (
			<DocumentTitle title="Products">
					<CommonTable
						title="Product list"
						items={products}
						fieldsOptions={tableProductOptions}
						onCreateItem={onCreateProduct}
						onDeleteItem={onDeleteProduct}
						onUpdateItem={onUpdateProduct}
					/>
			</DocumentTitle>
		);
	}
}

function mapStateToProps({ products }) {
	return {
		products,
	};
}

export default connect(mapStateToProps, {
	onCreateProduct: productActions.createProduct,
	onGetProducts: productActions.getProducts,
	onUpdateProduct: productActions.updateProduct,
	onDeleteProduct: productActions.deleteProduct
})(ProductsContainer);
