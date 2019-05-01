import dotenv from 'dotenv';

import CustomerService from '../services/database/CustomerService';
import handleGenerateToken from '../utils/handleGenerateToken';
import normalizeCustomerData from '../utils/normalizeCustomerData';

dotenv.config();

const signUp = async (req, res) => {
  const { email, name, password } = req.body;
  const result = await CustomerService.findBy({ email });
  if (result !== null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'USR_04',
        message: 'The email already exists.',
        field: 'email'
      }
    });
  }
  const newCustomer = await CustomerService.create({ email, name, password });
  const { customer_id } = newCustomer;
  const token = handleGenerateToken({ customer_id });
  const customer = normalizeCustomerData(newCustomer);
  const { TOKEN_EXPIRE } = process.env;

  return res.status(200).send({
    customer,
    accessToken: `Bearer ${token}`,
    expires_in: TOKEN_EXPIRE
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const isEmailExist = await CustomerService.findBy({ email });
  if (isEmailExist === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'USR_04',
        message: `The email doesn't exist.`,
        field: 'email'
      }
    });
  }

  const fetchedCustomer = await CustomerService.findBy({ email, password });
  if (fetchedCustomer === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'USR_04',
        message: 'Email or Password is invalid.',
        field: 'password'
      }
    });
  }
  const { customer_id } = fetchedCustomer;
  const token = handleGenerateToken({ customer_id });
  const customer = normalizeCustomerData(fetchedCustomer);
  const { TOKEN_EXPIRE } = process.env;

  return res.status(200).send({
    customer,
    accessToken: `Bearer ${token}`,
    expires_in: TOKEN_EXPIRE
  });
};

export { signUp, signIn };
