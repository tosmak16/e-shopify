import express from 'express';

import tokenAuthMiddleware from '../middlewares/authenticationMiddleware/tokenAuthMiddleware';
import {
  validateSignUpData,
  validateLoginData,
  validateUpdateCustomerData,
  validateUpdateCustomerAddressData,
  validateUpdateCustomerCreditCardData,
  normalizePaginationParams
} from '../middlewares/validationMiddlewares';
import {
  signIn,
  signUp,
  getCustomer,
  updateCustomer,
  updateCustomerAddress,
  updateCustomerCreditCard
} from '../controllers/customers';

import { getProducts, searchProducts, getSingleProduct } from '../controllers/products';

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
router.get('/productS/:Id', getSingleProduct);

export default router;
