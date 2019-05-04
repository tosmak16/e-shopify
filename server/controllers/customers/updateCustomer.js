import CustomerService from '../../services/database/CustomerService';
import normalizeCustomerData from '../../utils/normalizeCustomerData';

const updateCustomer = async (req, res) => {
  const { customer_id } = req.decoded;
  const { email } = req.body;
  const fetchedCustomer = await CustomerService.findById(customer_id);

  if (fetchedCustomer === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'USR_02',
        message: 'Customer does not exist',
        field: 'NoCustomer'
      }
    });
  }

  if (email !== fetchedCustomer.email) {
    const result = await CustomerService.findOneBy({ email });
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
  }

  const updatedCustomer = await CustomerService.update(fetchedCustomer, req.body);

  const customer = normalizeCustomerData(updatedCustomer);

  return res.status(200).send(customer);
};

export default updateCustomer;
