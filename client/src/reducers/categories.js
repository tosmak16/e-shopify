import {
  GET_CATEGORY_IN_DEPARTMENT_FAIL,
  GET_CATEGORY_IN_DEPARTMENT_SUCCESS,
  GET_CATEGORY_IN_DEPARTMENT_START
} from '../actions/types';

export const initialState = {
  data: [],
  isFetching: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_IN_DEPARTMENT_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case GET_CATEGORY_IN_DEPARTMENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case GET_CATEGORY_IN_DEPARTMENT_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};
