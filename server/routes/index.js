import express from 'express';

import tokenAuthMiddleware from '../middlewares/authenticationMiddleware/tokenAuthMiddleware';
import {
  validateSignUpData,
  validateLoginData,
  validateUpdateCustomerData,
  validateUpdateCustomerAddressData,
  validateUpdateCustomerCreditCardData
} from '../middlewares/validationMiddlewares';
import {
  signIn,
  signUp,
  getCustomer,
  updateCustomer,
  updateCustomerAddress,
  updateCustomerCreditCard
} from '../controllers/customers';

const router = express.Router();

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

export default router;
