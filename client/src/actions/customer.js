import axios from 'axios';

import {
  REGISTER_CUSTOMER_FAIL,
  REGISTER_CUSTOMER_START,
  REGISTER_CUSTOMER_SUCCESS
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

export default registerUser;
