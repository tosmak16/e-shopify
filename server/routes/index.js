import express from 'express';

import tokenAuthMiddleware from '../middlewares/authenticationMiddleware/tokenAuthMiddleware';
import { validateSignUpData, validateLoginData } from '../middlewares/validationMiddlewares';
import { signIn, signUp, getCustomer } from '../controllers/customers';

const router = express.Router();

router.post('/customers', validateSignUpData, signUp);
router.post('/customers/login', validateLoginData, signIn);
router.get('/customer', tokenAuthMiddleware, getCustomer);

export default router;
