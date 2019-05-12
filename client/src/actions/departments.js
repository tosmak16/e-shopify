import axios from 'axios';

import { GET_DEPARTMENTS_FAIL, GET_DEPARTMENTS_START, GET_DEPARTMENTS_SUCCESS } from './types';

export const getDepartments = () => async dispatch => {
  dispatch({ type: GET_DEPARTMENTS_START });
  try {
    const response = await axios.get(`${process.env.api_url}departments`);
    if (response.status === 200) {
      const { data } = response;
      return dispatch({
        type: GET_DEPARTMENTS_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: GET_DEPARTMENTS_FAIL, data: error.response.data.message });
  }
};

export default getDepartments;
