import OrderService from '../../services/database/OrderService';
import customerInOrderQuery from '../../queries/customerInOrderQuery';

const getOrdersByCustomer = async (req, res) => {
  const { customer_id } = req.decoded;

  const orders = await OrderService.findAllBy(customerInOrderQuery({ customer_id }));

  return res.status(200).send(orders);
};

export default getOrdersByCustomer;
