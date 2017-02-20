import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { TableItems, TableHeader } from '../components';
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
				<div>
					<TableHeader
						title="Product list"
						fieldsOptions={tableProductOptions}
						onCreateItem={onCreateProduct}
						onGetList={onGetProducts}
						onDeleteItem={onDeleteProduct}
					/>
					<TableItems
						items={products}
						fieldsOptions={tableProductOptions}
						onDeleteItem={onDeleteProduct}
						onUpdateItem={onUpdateProduct}
					/>
				</div>
			</DocumentTitle>
		);
	}
}

/*
 ProductsContainer.propTypes = {
 products: PropTypes.Array,
 onCreateProduct: PropTypes.func,
 };
 */

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
