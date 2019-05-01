import express from 'express';

import { validateSignUpData, validateLoginData } from '../middlewares/validationMiddlewares';
import { signUp, signIn } from '../controllers/customers';

const router = express.Router();

router.post('/customers', validateSignUpData, signUp);
router.post('/customers/login', validateLoginData, signIn);

export default router;
