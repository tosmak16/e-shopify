import {
  GET_DEPARTMENTS_FAIL,
  GET_DEPARTMENTS_START,
  GET_DEPARTMENTS_SUCCESS
} from '../actions/types';

export const initialState = {
  data: [],
  isFetching: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case GET_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case GET_DEPARTMENTS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};
