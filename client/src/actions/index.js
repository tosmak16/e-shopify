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
import { generateUniqueCartId, addToCart } from './cart';

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
  addToCart
};
