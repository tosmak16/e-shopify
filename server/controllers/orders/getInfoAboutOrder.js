import OrderService from '../../services/database/OrderService';
import orderShortDetailQuery from '../../queries/orderShortDetailQuery';

const getInfoAboutOrder = async (req, res) => {
  const order_id = req.params.id;

  const orders = await OrderService.findAllBy(orderShortDetailQuery({ order_id }));

  return res.status(200).send(orders);
};

export default getInfoAboutOrder;
