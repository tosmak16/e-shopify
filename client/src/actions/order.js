import axios from 'axios';

import {
  ORDER_PRODUCT_START,
  ORDER_PRODUCT_SUCCESS,
  ORDER_PRODUCT_FAIL,
  CHARGE_CUSTOMER_START,
  CHARGE_CUSTOMER_SUCCESS,
  CHARGE_CUSTOMER_FAIL
} from './types';

export const chargeCustormer = (paymentData, accessToken, alert) => async dispatch => {
  dispatch({ type: CHARGE_CUSTOMER_START });
  try {
    const response = await axios.post(`${process.env.api_url}stripe/charge`, paymentData, {
      headers: {
        'USER-KEY': accessToken
      }
    });
    if (response.status === 200) {
      alert.success('Payment successful');
      const { data } = response;
      return dispatch({
        type: CHARGE_CUSTOMER_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: CHARGE_CUSTOMER_FAIL, errorMessage: error.response.data.error.message });
  }
};

export const orderProduct = ({
  stripeToken,
  cart_id,
  shipping_id,
  accessToken,
  amount,
  description,
  alert
}) => async dispatch => {
  dispatch({ type: ORDER_PRODUCT_START });

  try {
    const response = await axios.post(
      `${process.env.api_url}orders`,
      {
        cart_id: cart_id,
        shipping_id,
        tax_id: 1
      },
      {
        headers: {
          'USER-KEY': accessToken
        }
      }
    );
    if (response.status === 200) {
      const { data } = response;
      const { order_id } = data;

      dispatch(
        chargeCustormer(
          {
            order_id,
            stripeToken,
            description,
            amount
          },
          accessToken,
          alert
        )
      );
      return dispatch({
        type: ORDER_PRODUCT_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: ORDER_PRODUCT_FAIL, errorMessage: error.response.data.message });
  }
};

export default orderProduct;
