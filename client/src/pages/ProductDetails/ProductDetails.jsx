import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';

import styles from './ProductDetails.scss';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Tile from '../../components/Tile/Tile';
import {
  getProductDetails,
  getAttributesInProduct,
  generateUniqueCartId,
  addToCart
} from '../../actions';
import ProductTile from './common/ProductTile/ProductTile';

const ProductDetails = props => {
  const {
    productData,
    getProductDetails,
    match: {
      params: { productId }
    },
    getAttributesInProduct,
    attributesInProductData,
    generateUniqueCartId,
    history,
    addToCart,
    cartId
  } = props;
  const [productDetails, setProductDetails] = useState({});
  const [selectedAttributes, setSelectedAttributes] = useState({ size: '', color: '' });
  const [quantity, setQuantity] = useState(1);

  const addProductColor = color => setSelectedAttributes({ ...selectedAttributes, color });

  const addProductSize = size => setSelectedAttributes({ ...selectedAttributes, size });
  const addProductToCart = () => {
    const addToCartData = {
      productId,
      attributes: `${selectedAttributes.color} ${selectedAttributes.size}`,
      quantity,
      history,
      cart_id: cartId
    };
    if (isEmpty(cartId)) {
      return generateUniqueCartId(addToCartData);
    }
    return addToCart(addToCartData);
  };

  useEffect(() => {
    if (isEmpty(attributesInProductData)) {
      getAttributesInProduct(productId);
    }
  }, [attributesInProductData]);

  useEffect(() => {
    if (isEmpty(productDetails)) {
      getProductDetails(productId);
    }

    setProductDetails(productData);
  }, [productData]);
  return (
    <section>
      <div styleName="main-content">
        <div styleName="image-slider-wrapper">
          <Tile>
            <ImageSlider productData={productData} />
          </Tile>
        </div>
        <ProductTile
          attributesInProductData={attributesInProductData}
          addProductSize={addProductSize}
          addProductColor={addProductColor}
          productData={productData}
          onQuanityValueChanged={setQuantity}
          addToCart={addProductToCart}
        />
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  productData: state.product.data,
  attributesInProductData: state.attributesInProduct.data,
  cartId: state.cart.data.cart_id
});

export default withRouter(
  connect(
    mapStateToProps,
    { getProductDetails, getAttributesInProduct, generateUniqueCartId, addToCart }
  )(CSSModules(ProductDetails, styles))
);
