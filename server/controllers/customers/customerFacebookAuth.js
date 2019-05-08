import CustomerService from '../../services/database/CustomerService';
import handleGenerateToken from '../../utils/handleGenerateToken';
import normalizeCustomerData from '../../utils/normalizeCustomerData';

export default async (req, res) => {
  const { email, name, token } = req.user;
  const newCustomer = await CustomerService.findOrCreate(
    { email },
    { email, name, password: token.slice(0, 10) }
  );

  const { customer_id } = newCustomer[0];
  const jwtToken = handleGenerateToken({ customer_id });
  const customer = normalizeCustomerData(newCustomer[0]);
  const { TOKEN_EXPIRE } = process.env;

  return res.status(200).send({
    customer,
    accessToken: `Bearer ${jwtToken}`,
    expires_in: TOKEN_EXPIRE
  });
};
