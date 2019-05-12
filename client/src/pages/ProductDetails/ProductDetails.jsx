import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import styles from './ProductDetails.scss';
import Nav from '../../components/Nav/Nav';
import SideBar from '../../components/SideBar/SideBar';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Tile from '../../components/Tile/Tile';
import Button from '../../components/Button/Button';
import { getProductDetails, getAttributesInProduct, generateUniqueCartId } from '../../actions';
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
    history
  } = props;
  const [productDetails, setProductDetails] = useState({});
  const [selectedAttributes, setSelectedAttributes] = useState({ size: '', color: '' });
  const [quantity, setQuantity] = useState(1);

  const addProductColor = color => setSelectedAttributes({ ...selectedAttributes, color });

  const addProductSize = size => setSelectedAttributes({ ...selectedAttributes, size });

  const addToCart = () => {
    generateUniqueCartId({
      productId,
      attributes: `${selectedAttributes.color} ${selectedAttributes.size}`,
      quantity,
      history
    });
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
    <div styleName="main-container">
      <Nav />
      <section styleName="sidebar-container">
        <SideBar />
      </section>
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
            addToCart={addToCart}
          />
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  productData: state.product.data,
  attributesInProductData: state.attributesInProduct.data
});

export default connect(
  mapStateToProps,
  { getProductDetails, getAttributesInProduct, generateUniqueCartId }
)(CSSModules(ProductDetails, styles));
