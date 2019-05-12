import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAIL,
  SEARCH_PRODUCTS_START,
  SEARCH_PRODUCTS_SUCCESS,
  GET_PRODUCT_IN_DEPARTMENT_FAIL,
  GET_PRODUCT_IN_DEPARTMENT_START,
  GET_PRODUCT_IN_DEPARTMENT_SUCCESS,
  GET_PRODUCT_IN_CATEGORY_FAIL,
  GET_PRODUCT_IN_CATEGORY_START,
  GET_PRODUCT_IN_CATEGORY_SUCCESS
} from '../actions/types';

export const initialState = {
  data: [],
  count: 0,
  isFetching: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.products,
        isFetching: false
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    case SEARCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.products,
        isFetching: false
      };
    case SEARCH_PRODUCTS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    case GET_PRODUCT_IN_DEPARTMENT_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case GET_PRODUCT_IN_DEPARTMENT_SUCCESS:
      return {
        ...state,
        ...action.products,
        isFetching: false
      };
    case GET_PRODUCT_IN_DEPARTMENT_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    case GET_PRODUCT_IN_CATEGORY_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case GET_PRODUCT_IN_CATEGORY_SUCCESS:
      return {
        ...state,
        ...action.products,
        isFetching: false
      };
    case GET_PRODUCT_IN_CATEGORY_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};
