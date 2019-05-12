import {
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_START
} from '../actions/types';

export const initialState = {
  data: {},
  isFetching: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};
