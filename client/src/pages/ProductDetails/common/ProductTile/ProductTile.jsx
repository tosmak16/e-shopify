import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './ProductTile.scss';
import Tile from '../../../../components/Tile/Tile';
import Button from '../../../../components/Button/Button';
import ColorCheckers from '../../../../components/ColorCheckers/ColorCheckers';

const ProductTile = props => {
  const [quantityValue, setQuantityValue] = useState(1);
  const {
    productData: { name, description, price },
    attributesInProductData,
    addProductSize,
    addProductColor,
    onQuanityValueChanged,
    addToCart
  } = props;

  const colorList = [];
  const sizeList = [];

  const handleChange = ({ target: { value } }) => {
    onQuanityValueChanged(value);
    setQuantityValue(value);
  };

  attributesInProductData.map(({ attribute_value, attribute_name, attribute_value_id }) => {
    if (attribute_name === 'Color') {
      return colorList.push({
        name: attribute_value,
        color: attribute_value,
        id: attribute_value_id
      });
    }
    sizeList.push({
      name: attribute_value,
      color: attribute_value
    });
  });

  return (
    <div styleName="product-details-wrapper">
      <Tile>
        <div styleName="content-wrapper">
          <p styleName="price">{`$${price}`}</p>
          <p styleName="name">{name}</p>
          <p styleName="description">{description}</p>
          <input
            onChange={handleChange}
            value={quantityValue}
            type="number"
            name="quantity"
            min="0"
          />
          <div styleName="color-wrapper">
            Color
            <ColorCheckers onBoxClick={addProductColor} colorData={colorList} />
          </div>
          <div styleName="size-wrapper">
            Size
            <ColorCheckers onBoxClick={addProductSize} colorData={sizeList} />
          </div>
          <div styleName="button-wrapper">
            <Button onClick={addToCart}>Add to cart</Button>
          </div>
        </div>
      </Tile>
    </div>
  );
};

ProductTile.propTypes = {
  productData: PropTypes.objectOf(PropTypes.any)
};

ProductTile.defaultProps = {
  productData: {
    name: '',
    price: '0',
    description: ''
  }
};

export default CSSModules(ProductTile, styles, { allowMultiple: true });
