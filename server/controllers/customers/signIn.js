import dotenv from 'dotenv';

import CustomerService from '../../services/database/CustomerService';
import handleGenerateToken from '../../utils/handleGenerateToken';
import normalizeCustomerData from '../../utils/normalizeCustomerData';

dotenv.config();

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const isEmailExist = await CustomerService.findOneBy({ email });
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

  const fetchedCustomer = await CustomerService.findOneBy({ email, password });
  if (fetchedCustomer === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'USR_01',
        message: 'Email or Password is invalid.',
        field: 'password'
      }
    });
  }
  const { customer_id, name } = fetchedCustomer;
  const token = handleGenerateToken({ customer_id, email, name });
  const customer = normalizeCustomerData(fetchedCustomer);
  const { TOKEN_EXPIRE } = process.env;

  return res.status(200).send({
    customer,
    accessToken: `Bearer ${token}`,
    expires_in: TOKEN_EXPIRE
  });
};

export default signIn;
