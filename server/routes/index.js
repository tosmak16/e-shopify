import express from 'express';

import tokenAuthMiddleware from '../middlewares/authenticationMiddleware/tokenAuthMiddleware';
import {
  validateSignUpData,
  validateLoginData,
  validateUpdateCustomerData,
  validateUpdateCustomerAddressData
} from '../middlewares/validationMiddlewares';
import {
  signIn,
  signUp,
  getCustomer,
  updateCustomer,
  updateCustomerAddress
} from '../controllers/customers';

const router = express.Router();

router.post('/customers', validateSignUpData, signUp);
router.post('/customers/login', validateLoginData, signIn);
router.get('/customer', tokenAuthMiddleware, getCustomer);
router.put('/customer', tokenAuthMiddleware, validateUpdateCustomerData, updateCustomer);
router.put(
  '/customer/address',
  tokenAuthMiddleware,
  validateUpdateCustomerAddressData,
  updateCustomerAddress
);

export default router;
