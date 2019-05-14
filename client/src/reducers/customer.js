import {
  REGISTER_CUSTOMER_FAIL,
  REGISTER_CUSTOMER_START,
  REGISTER_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_START,
  LOGIN_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_FAIL,
  LOGOUT_CUSTOMER
} from '../actions/types';

export const initialState = {
  data: { customer: '', accessToken: '' },
  isFetching: false,
  errorMessage: '',
  field: '',
  isLoggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_CUSTOMER_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        field: '',
        isLoggedIn: false
      };
    case REGISTER_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        isLoggedIn: true
      };
    case REGISTER_CUSTOMER_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.data.message,
        field: action.data.field,
        isLoggedIn: false
      };

    case LOGIN_CUSTOMER_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        field: '',
        isLoggedIn: false
      };
    case LOGIN_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        isLoggedIn: true
      };
    case LOGIN_CUSTOMER_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.data.message,
        field: action.data.field,
        isLoggedIn: false
      };

    case LOGOUT_CUSTOMER:
      return initialState;

    default:
      return state;
  }
};
