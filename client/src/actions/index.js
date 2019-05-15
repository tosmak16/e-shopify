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

import { registerUser, loginUser, logoutUser, updateAddress, facebookLogin } from './customer';
import { getShippingRegions, getShippingRegionsWithCost } from './shippingRegion';
import { orderProduct, chargeCustormer } from './order';

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
  logoutUser,
  getShippingRegions,
  getShippingRegionsWithCost,
  updateAddress,
  orderProduct,
  chargeCustormer,
  facebookLogin
};
