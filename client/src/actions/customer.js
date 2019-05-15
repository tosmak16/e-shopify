import axios from 'axios';

import {
  REGISTER_CUSTOMER_FAIL,
  REGISTER_CUSTOMER_START,
  REGISTER_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_START,
  LOGIN_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_FAIL,
  LOGOUT_CUSTOMER,
  UPDATE_CUSTOMER_ADDRESS_FAIL,
  UPDATE_CUSTOMER_ADDRESS_START,
  UPDATE_CUSTOMER_ADDRESS_SUCCESS
} from './types';

export const registerUser = (custormerData, history) => async dispatch => {
  dispatch({ type: REGISTER_CUSTOMER_START });
  try {
    const response = await axios.post(`${process.env.api_url}customers`, custormerData);
    if (response.status === 200) {
      const { data } = response;
      dispatch({
        type: REGISTER_CUSTOMER_SUCCESS,
        data
      });

      return history.push('/products');
    }
  } catch (error) {
    dispatch({ type: REGISTER_CUSTOMER_FAIL, data: error.response.data.error });
  }
};

export const loginUser = (custormerData, history) => async dispatch => {
  dispatch({ type: LOGIN_CUSTOMER_START });
  try {
    const response = await axios.post(`${process.env.api_url}customers/login`, custormerData);
    if (response.status === 200) {
      const { data } = response;
      dispatch({
        type: LOGIN_CUSTOMER_SUCCESS,
        data
      });

      return history.push('/products');
    }
  } catch (error) {
    dispatch({ type: LOGIN_CUSTOMER_FAIL, data: error.response.data.error });
  }
};

export const logoutUser = history => async dispatch => {
  dispatch({ type: LOGOUT_CUSTOMER });
  if (history) {
    return history.push('/sign-in');
  }
};

export const updateAddress = (custormerData, accessToken) => async dispatch => {
  dispatch({ type: UPDATE_CUSTOMER_ADDRESS_START });
  try {
    const response = await axios.put(`${process.env.api_url}customers/address`, custormerData, {
      headers: {
        'USER-KEY': accessToken
      }
    });
    if (response.status === 200) {
      const { data } = response;
      return dispatch({
        type: UPDATE_CUSTOMER_ADDRESS_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: UPDATE_CUSTOMER_ADDRESS_FAIL, data: error.response.data.error });
  }
};

export const facebookLogin = (custormerData, history) => async dispatch => {
  dispatch({ type: LOGIN_CUSTOMER_START });
  try {
    const response = await axios.post(`${process.env.api_url}customers/facebook`, custormerData);
    if (response.status === 200) {
      const { data } = response;
      dispatch({
        type: LOGIN_CUSTOMER_SUCCESS,
        data
      });

      return history.push('/products');
    }
  } catch (error) {
    dispatch({ type: LOGIN_CUSTOMER_FAIL, data: error.response.data.error });
  }
};
