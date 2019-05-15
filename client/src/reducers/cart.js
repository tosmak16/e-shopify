import {
  GENERATE_UNIQUE_CART_ID_START,
  GENERATE_UNIQUE_CART_ID_SUCCESS,
  GENERATE_UNIQUE_CART_ID_FAIL,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_START,
  ADD_TO_CART_FAIL,
  UPDATE_CART_FAIL,
  UPDATE_CART_START,
  UPDATE_CART_SUCCESS,
  GET_PRODUCT_IN_CART_START,
  GET_PRODUCT_IN_CART_SUCCESS,
  GET_PRODUCT_IN_CART_FAIL,
  REMOVE_PRODUCT_IN_CART_SUCCESS,
  REMOVE_PRODUCT_IN_CART_FAIL,
  REMOVE_PRODUCT_IN_CART_START,
  GET_TOTAL_AMOUNT_IN_CART_FAIL,
  GET_TOTAL_AMOUNT_IN_CART_START,
  GET_TOTAL_AMOUNT_IN_CART_SUCCESS,
  CHARGE_CUSTOMER_SUCCESS
} from '../actions/types';

import removeProductInCartHandler from '../utils/removeProductInCartHandler';

export const initialState = {
  data: {
    cart_id: '',
    cartItemList: [],
    totalAmout: null
  },
  isLoading: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_UNIQUE_CART_ID_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };
    case GENERATE_UNIQUE_CART_ID_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.data },
        isLoading: true
      };
    case GENERATE_UNIQUE_CART_ID_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage
      };

    case ADD_TO_CART_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        data: { ...state.data, cartItemList: action.data },
        isLoading: action.isLoading
      };
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage
      };

    case UPDATE_CART_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };
    case UPDATE_CART_SUCCESS:
      return {
        ...state,
        data: { ...state.data, cartItemList: action.data },
        isLoading: false
      };
    case UPDATE_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage
      };

    case GET_PRODUCT_IN_CART_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };
    case GET_PRODUCT_IN_CART_SUCCESS:
      return {
        ...state,
        data: { ...state.data, cartItemList: action.data },
        isLoading: false
      };
    case GET_PRODUCT_IN_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage
      };

    case REMOVE_PRODUCT_IN_CART_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };
    case REMOVE_PRODUCT_IN_CART_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          cartItemList: removeProductInCartHandler(state, action.data),
          cart_id:
            removeProductInCartHandler(state, action.data).length === 0 ? null : state.data.cart_id
        },
        isLoading: false
      };
    case REMOVE_PRODUCT_IN_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage
      };

    case GET_TOTAL_AMOUNT_IN_CART_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };
    case GET_TOTAL_AMOUNT_IN_CART_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          totalAmout: action.data.total_amount
        },
        isLoading: false
      };
    case GET_TOTAL_AMOUNT_IN_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage
      };

    case CHARGE_CUSTOMER_SUCCESS:
      return initialState;

    default:
      return state;
  }
};
