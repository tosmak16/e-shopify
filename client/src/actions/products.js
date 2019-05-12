import axios from 'axios';

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
} from './types';

export const getProducts = (limit = 20, page = 0) => async dispatch => {
  dispatch({ type: GET_PRODUCTS_START });
  try {
    const response = await axios.get(
      `${process.env.api_url}products?description_length=100&limit=${limit}&page=${page}`
    );
    if (response.status === 200) {
      const { rows, count } = response.data;
      return dispatch({
        type: GET_PRODUCTS_SUCCESS,
        products: {
          data: rows,
          count
        }
      });
    }
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, data: error.response.data.message });
  }
};

export const searchProducts = (searchString = '', limit = 20, page = 0) => async dispatch => {
  dispatch({ type: SEARCH_PRODUCTS_START });
  try {
    const response = await axios.get(
      `${
        process.env.api_url
      }products/search?description_length=100&limit=${limit}&page=${page}&all_words=off&query_string=${searchString}`
    );
    if (response.status === 200) {
      const { rows, count } = response.data;
      return dispatch({
        type: SEARCH_PRODUCTS_SUCCESS,
        products: {
          data: rows,
          count
        }
      });
    }
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCTS_FAIL, data: error.response.data.message });
  }
};

export const getProductsInDepartment = (departmentId, limit = 20, page = 0) => async dispatch => {
  dispatch({ type: GET_PRODUCT_IN_DEPARTMENT_START });
  try {
    const response = await axios.get(
      `${
        process.env.api_url
      }products/inDepartment/${departmentId}?description_length=100&limit=${limit}&page=${page}`
    );
    if (response.status === 200) {
      const { rows, count } = response.data;
      return dispatch({
        type: GET_PRODUCT_IN_DEPARTMENT_SUCCESS,
        products: {
          data: rows,
          count
        }
      });
    }
  } catch (error) {
    dispatch({ type: GET_PRODUCT_IN_DEPARTMENT_FAIL, data: error.response.data.message });
  }
};

export const getProductsInCategory = (categoryId, limit = 20, page = 0) => async dispatch => {
  dispatch({ type: GET_PRODUCT_IN_CATEGORY_START });
  try {
    const response = await axios.get(
      `${
        process.env.api_url
      }products/inCategory/${categoryId}?description_length=100&limit=${limit}&page=${page}`
    );
    if (response.status === 200) {
      const { rows, count } = response.data;
      return dispatch({
        type: GET_PRODUCT_IN_CATEGORY_SUCCESS,
        products: {
          data: rows,
          count
        }
      });
    }
  } catch (error) {
    dispatch({ type: GET_PRODUCT_IN_CATEGORY_FAIL, data: error.response.data.message });
  }
};
