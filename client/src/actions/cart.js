import axios from 'axios';

import {
  GENERATE_UNIQUE_CART_ID_START,
  GENERATE_UNIQUE_CART_ID_SUCCESS,
  GENERATE_UNIQUE_CART_ID_FAIL,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_START,
  ADD_TO_CART_FAIL,
  UPDATE_CART_FAIL,
  UPDATE_CART_START,
  UPDATE_CART_SUCCESS
} from './types';

export const updateCart = (quantity, itemId, history) => async dispatch => {
  dispatch({ type: UPDATE_CART_START });
  try {
    const response = await axios.put(`${process.env.api_url}shoppingcart/update/${itemId}`, {
      quantity
    });
    if (response.status === 200) {
      const { data } = response;
      dispatch({
        type: UPDATE_CART_SUCCESS,
        data
      });

      return history.push('/cart');
    }
  } catch (error) {
    dispatch({ type: UPDATE_CART_FAIL, data: error.response.data.message });
  }
};

export const addToCart = ({
  product_id,
  attributes,
  quantity,
  cart_id,
  history
}) => async dispatch => {
  dispatch({ type: ADD_TO_CART_START });
  try {
    const response = await axios.post(`${process.env.api_url}shoppingcart/add`, {
      product_id,
      attributes,
      cart_id
    });
    if (response.status === 200) {
      const { data } = response;
      const { item_id } = data[0];

      const isQuantityMoreThanOne = quantity > 1;

      if (isQuantityMoreThanOne) {
        dispatch(updateCart(quantity, item_id, history));
      }

      dispatch({
        type: ADD_TO_CART_SUCCESS,
        data,
        isLoading: isQuantityMoreThanOne
      });

      if (!isQuantityMoreThanOne) {
        return history.push('/cart');
      }
    }
  } catch (error) {
    dispatch({ type: ADD_TO_CART_FAIL, data: error.response.data.message });
  }
};

export const generateUniqueCartId = ({
  productId,
  attributes,
  quantity,
  history
}) => async dispatch => {
  dispatch({ type: GENERATE_UNIQUE_CART_ID_START });
  try {
    const response = await axios.get(`${process.env.api_url}shoppingcart/generateUniqueId`);
    if (response.status === 200) {
      const { data } = response;
      const { cart_id } = data;

      dispatch(addToCart({ product_id: productId, attributes, quantity, cart_id, history }));
      return dispatch({
        type: GENERATE_UNIQUE_CART_ID_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: GENERATE_UNIQUE_CART_ID_FAIL, data: error.response.data.message });
  }
};

export default generateUniqueCartId;
