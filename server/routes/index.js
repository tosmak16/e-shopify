import express from 'express';

import tokenAuthMiddleware from '../middlewares/authenticationMiddleware/tokenAuthMiddleware';
import {
  validateSignUpData,
  validateLoginData,
  validateUpdateCustomerData,
  validateUpdateCustomerAddressData,
  validateUpdateCustomerCreditCardData,
  normalizePaginationParams,
  validateAddProductReviewsData
} from '../middlewares/validationMiddlewares';
import {
  signIn,
  signUp,
  getCustomer,
  updateCustomer,
  updateCustomerAddress,
  updateCustomerCreditCard
} from '../controllers/customers';

import {
  getProducts,
  searchProducts,
  getSingleProduct,
  getProductsByCategory,
  getProductsByDepartment,
  getProductDetails,
  getProductLocation,
  getProductReviews,
  addProductReviews
} from '../controllers/products';

import { getDepartments, getSingleDepartment } from '../controllers/departments';

import {
  getCategories,
  getSingleCategory,
  getCategoriesInProduct,
  getCategoriesInDepartment
} from '../controllers/categories';

import {
  getAttributes,
  getSingleAttributes,
  getAttributeValues,
  getAttributeByProduct
} from '../controllers/attributes';

import { getTaxes, getSingleTax } from '../controllers/taxes';

const router = express.Router();

// ************Customers routes *********** //
router.post('/customers', validateSignUpData, signUp);
router.post('/customers/login', validateLoginData, signIn);
router.get('/customer', tokenAuthMiddleware, getCustomer);
router.put('/customer', tokenAuthMiddleware, validateUpdateCustomerData, updateCustomer);
router.put(
  '/customers/address',
  tokenAuthMiddleware,
  validateUpdateCustomerAddressData,
  updateCustomerAddress
);
router.put(
  '/customers/creditCard',
  tokenAuthMiddleware,
  validateUpdateCustomerCreditCardData,
  updateCustomerCreditCard
);

// ********* */ Products routes ************ //
router.get('/products', normalizePaginationParams, getProducts);
router.get('/products/search', normalizePaginationParams, searchProducts);
router.get('/products/:id', getSingleProduct);
router.get('/products/inCategory/:id', normalizePaginationParams, getProductsByCategory);
router.get('/products/inDepartment/:id', normalizePaginationParams, getProductsByDepartment);
router.get('/products/:id/details', getProductDetails);
router.get('/products/:id/locations', getProductLocation);
router.get('/products/:id/reviews', getProductReviews);
router.post(
  '/products/:id/reviews',
  tokenAuthMiddleware,
  validateAddProductReviewsData,
  addProductReviews
);

// ********* */ Departments routes ************ //
router.get('/departments', getDepartments);
router.get('/departments/:id', getSingleDepartment);

// ********* */ Categories routes ************ //
router.get('/categories', normalizePaginationParams, getCategories);
router.get('/categories/:id', getSingleCategory);
router.get('/categories/inProduct/:id', getCategoriesInProduct);
router.get('/categories/inDepartment/:id', getCategoriesInDepartment);

// ********* */ Attributes routes ************ //
router.get('/attributes', getAttributes);
router.get('/attributes/:id', getSingleAttributes);
router.get('/attributes/values/:id', getAttributeValues);
router.get('/attributes/inProduct/:id', getAttributeByProduct);

// ********* */ Tax routes ************ //
router.get('/tax', getTaxes);
router.get('/tax/:id', getSingleTax);

export default router;
