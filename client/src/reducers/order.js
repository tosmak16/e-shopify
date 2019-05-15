import {
  ORDER_PRODUCT_START,
  ORDER_PRODUCT_SUCCESS,
  ORDER_PRODUCT_FAIL,
  CHARGE_CUSTOMER_START,
  CHARGE_CUSTOMER_SUCCESS,
  CHARGE_CUSTOMER_FAIL
} from '../actions/types';

export const initialState = {
  data: {
    order_id: null
  },
  isFetching: false,
  errorMessage: '',
  orderCompleted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PRODUCT_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        orderCompleted: false
      };
    case ORDER_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: true
      };
    case ORDER_PRODUCT_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case CHARGE_CUSTOMER_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case CHARGE_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orderCompleted: true
      };
    case CHARGE_CUSTOMER_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};
