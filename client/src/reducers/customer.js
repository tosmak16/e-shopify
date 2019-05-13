import {
  REGISTER_CUSTOMER_FAIL,
  REGISTER_CUSTOMER_START,
  REGISTER_CUSTOMER_SUCCESS
} from '../actions/types';

export const initialState = {
  data: { customer: '', accessToken: '' },
  isFetching: false,
  errorMessage: '',
  field: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_CUSTOMER_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        field: ''
      };
    case REGISTER_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case REGISTER_CUSTOMER_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.data.message,
        field: action.data.field
      };

    default:
      return state;
  }
};
