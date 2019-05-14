import axios from 'axios';

import {
  GET_SHIPPING_REGION_START,
  GET_SHIPPING_REGION_SUCCESS,
  GET_SHIPPING_REGION_FAIL,
  GET_SHIPPING_REGION_WITH_COST_FAIL,
  GET_SHIPPING_REGION_WITH_COST_START,
  GET_SHIPPING_REGION_WITH_COST_SUCCESS
} from './types';

export const getShippingRegions = () => async dispatch => {
  dispatch({ type: GET_SHIPPING_REGION_START });
  try {
    const response = await axios.get(`${process.env.api_url}shipping/regions`);
    if (response.status === 200) {
      const { data } = response;
      return dispatch({
        type: GET_SHIPPING_REGION_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: GET_SHIPPING_REGION_FAIL, data: error.response.data.message });
  }
};

export const getShippingRegionsWithCost = shippingRegionId => async dispatch => {
  dispatch({ type: GET_SHIPPING_REGION_WITH_COST_START });
  try {
    const response = await axios.get(`${process.env.api_url}shipping/regions/${shippingRegionId}}`);
    if (response.status === 200) {
      const { data } = response;
      return dispatch({
        type: GET_SHIPPING_REGION_WITH_COST_SUCCESS,
        data
      });
    }
  } catch (error) {
    dispatch({ type: GET_SHIPPING_REGION_WITH_COST_FAIL, data: error.response.data.message });
  }
};
