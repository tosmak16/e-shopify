import {
  getProducts,
  searchProducts,
  getProductsInDepartment,
  getProductsInCategory
} from './products';
import { getDepartments } from './departments';
import { getCategoryInDepartment } from './categories';
import { getProductDetails } from './productDetails';
import { getAttributesInProduct } from './attributes';
import {
  generateUniqueCartId,
  addToCart,
  getProductsInCart,
  updateCart,
  removeProductFromCart,
  getTotalAmountInCart
} from './cart';

import { registerUser, loginUser, logoutUser } from './customer';

export {
  getProducts,
  searchProducts,
  getDepartments,
  getCategoryInDepartment,
  getProductsInDepartment,
  getProductsInCategory,
  getProductDetails,
  getAttributesInProduct,
  generateUniqueCartId,
  addToCart,
  getProductsInCart,
  updateCart,
  removeProductFromCart,
  getTotalAmountInCart,
  registerUser,
  loginUser,
  logoutUser
};
