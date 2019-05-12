import axios from 'axios';

import {
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_START
} from './types';

export const getProductDetails = productId => async dispatch => {
  dispatch({ type: GET_PRODUCT_DETAILS_START });
  try {
    const response = await axios.get(`${process.env.api_url}products/${productId}`);
    if (response.status === 200) {
      const { data } = response;
      return dispatch({
        type: GET_PRODUCT_DETAILS_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: GET_PRODUCT_DETAILS_FAIL, data: error.response.data.message });
  }
};

export default getProductDetails;
