import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import products from './products';
import departments from './departments';
import categories from './categories';
import product from './product';
import attributesInProduct from './attributesInProduct';
import cart from './cart';

// Reducers

export default history =>
  combineReducers({
    products,
    departments,
    categories,
    product,
    attributesInProduct,
    cart,
    router: connectRouter(history)
  });
