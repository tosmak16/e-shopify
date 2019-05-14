import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import products from './products';
import departments from './departments';
import categories from './categories';
import product from './product';
import attributesInProduct from './attributesInProduct';
import cart from './cart';
import customer from './customer';
import shippingRegion from './shippingRegion';

// Reducers
export default history =>
  combineReducers({
    products,
    departments,
    categories,
    product,
    attributesInProduct,
    cart,
    customer,
    shippingRegion,
    router: connectRouter(history)
  });
