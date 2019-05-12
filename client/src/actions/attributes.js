import axios from 'axios';

import {
  GET_ATTRIBUTES_IN_PRODUCT_FAIL,
  GET_ATTRIBUTES_IN_PRODUCT_START,
  GET_ATTRIBUTES_IN_PRODUCT_SUCCESS
} from './types';

export const getAttributesInProduct = productId => async dispatch => {
  dispatch({ type: GET_ATTRIBUTES_IN_PRODUCT_START });
  try {
    const response = await axios.get(`${process.env.api_url}attributes/inProduct/${productId}`);
    if (response.status === 200) {
      const { data } = response;
      return dispatch({
        type: GET_ATTRIBUTES_IN_PRODUCT_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: GET_ATTRIBUTES_IN_PRODUCT_FAIL, data: error.response.data.message });
  }
};

export default getAttributesInProduct;
