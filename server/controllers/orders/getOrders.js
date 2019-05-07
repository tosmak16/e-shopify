import OrderDetailService from '../../services/database/OrderDetailService';
import orderDetailsQuery from '../../queries/orderDetailsQuery';

const getOrders = async (req, res) => {
  const order_id = req.params.id;

  const orders = await OrderDetailService.findAllBy(orderDetailsQuery({ order_id }));

  return res.status(200).send(orders);
};

export default getOrders;
