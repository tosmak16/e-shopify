import axios from 'axios';

import {
  REGISTER_CUSTOMER_FAIL,
  REGISTER_CUSTOMER_START,
  REGISTER_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_START,
  LOGIN_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_FAIL,
  LOGOUT_CUSTOMER
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

export const logoutUser = () => async dispatch => {
  dispatch({ type: LOGOUT_CUSTOMER });
};
