import {
  GET_ATTRIBUTES_IN_PRODUCT_FAIL,
  GET_ATTRIBUTES_IN_PRODUCT_START,
  GET_ATTRIBUTES_IN_PRODUCT_SUCCESS
} from '../actions/types';

export const initialState = {
  data: [],
  isFetching: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ATTRIBUTES_IN_PRODUCT_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case GET_ATTRIBUTES_IN_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case GET_ATTRIBUTES_IN_PRODUCT_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};
