import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import styles from './CartPage.scss';
import Table from '../../components/Table/Table';
import Tile from '../../components/Tile/Tile';
import Button from '../../components/Button/Button';
import {
  getProductsInCart,
  updateCart,
  removeProductFromCart,
  getTotalAmountInCart
} from '../../actions';

const CartPage = props => {
  const [productsInCart, setProductInCart] = useState([]);

  const {
    getProductsInCart,
    productsInCartData: { cartItemList, cart_id, totalAmout },
    updateCart,
    removeProductFromCart,
    getTotalAmountInCart
  } = props;

  useEffect(() => {
    if (isEmpty(productsInCart)) {
      getProductsInCart(cart_id);
    }
    getTotalAmountInCart(cart_id);
    setProductInCart(cartItemList);
  }, [cartItemList]);

  return (
    <div styleName="main-container">
      <div className="table-coontainer">
        {!isEmpty(productsInCart) && (
          <Table
            handleRemoveItem={removeProductFromCart}
            tableData={productsInCart}
            updateCart={updateCart}
          />
        )}
      </div>
      <div styleName="total-checkout-container">
        <Tile>
          <div styleName="checkout-content">
            <h2>Cart Total</h2>
            <div styleName="total-wrapper">
              <span>Total</span>
              <span styleName="total-amount-text">{`$${totalAmout}`}</span>
            </div>
            <div styleName="button-wrapper">
              <Button onClick={() => {}}>Checkout</Button>
            </div>
          </div>
        </Tile>
      </div>
    </div>
  );
};

CartPage.propTypes = {};

const mapStateToProps = state => ({
  productsInCartData: state.cart.data
});

export default connect(
  mapStateToProps,
  { getProductsInCart, updateCart, removeProductFromCart, getTotalAmountInCart }
)(CSSModules(CartPage, styles));
