import CustomerService from '../../services/database/CustomerService';
import normalizeCustomerData from '../../utils/normalizeCustomerData';

const updateCustomerAddress = async (req, res) => {
  const { customer_id } = req.decoded;
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

  const updatedCustomer = await CustomerService.update(fetchedCustomer, req.body);

  const customer = normalizeCustomerData(updatedCustomer);

  return res.status(200).send(customer);
};

export default updateCustomerAddress;
