import {
  GET_SHIPPING_REGION_START,
  GET_SHIPPING_REGION_SUCCESS,
  GET_SHIPPING_REGION_FAIL,
  GET_SHIPPING_REGION_WITH_COST_FAIL,
  GET_SHIPPING_REGION_WITH_COST_START,
  GET_SHIPPING_REGION_WITH_COST_SUCCESS
} from '../actions/types';

export const initialState = {
  shippingRegions: [],
  shippingRegionsWithCost: [],
  isFetching: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHIPPING_REGION_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case GET_SHIPPING_REGION_SUCCESS:
      return {
        ...state,
        shippingRegions: action.data,
        isFetching: false
      };
    case GET_SHIPPING_REGION_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case GET_SHIPPING_REGION_WITH_COST_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case GET_SHIPPING_REGION_WITH_COST_SUCCESS:
      return {
        ...state,
        shippingRegionsWithCost: action.data,
        isFetching: false
      };
    case GET_SHIPPING_REGION_WITH_COST_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};
