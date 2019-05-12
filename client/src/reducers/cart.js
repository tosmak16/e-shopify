import {
  GENERATE_UNIQUE_CART_ID_START,
  GENERATE_UNIQUE_CART_ID_SUCCESS,
  GENERATE_UNIQUE_CART_ID_FAIL,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_START,
  ADD_TO_CART_FAIL,
  UPDATE_CART_FAIL,
  UPDATE_CART_START,
  UPDATE_CART_SUCCESS
} from '../actions/types';

export const initialState = {
  data: {
    cart_id: '',
    cartItemList: []
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

    default:
      return state;
  }
};
