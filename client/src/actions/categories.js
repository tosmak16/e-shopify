import axios from 'axios';

import {
  GET_CATEGORY_IN_DEPARTMENT_SUCCESS,
  GET_CATEGORY_IN_DEPARTMENT_FAIL,
  GET_CATEGORY_IN_DEPARTMENT_START
} from './types';

export const getCategoryInDepartment = departmentId => async dispatch => {
  dispatch({ type: GET_CATEGORY_IN_DEPARTMENT_START });
  try {
    const response = await axios.get(
      `${process.env.api_url}categories/inDepartment/${departmentId}`
    );
    if (response.status === 200) {
      const { data } = response;
      return dispatch({
        type: GET_CATEGORY_IN_DEPARTMENT_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: GET_CATEGORY_IN_DEPARTMENT_FAIL, data: error.response.data.message });
  }
};

export default getCategoryInDepartment;
