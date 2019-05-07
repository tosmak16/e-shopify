import OrderService from '../../services/database/OrderService';
import ShoppingCartService from '../../services/database/ShoppingCartService';
import TaxService from '../../services/database/TaxService';
import ShippingService from '../../services/database/ShippingService';
import productInCartListQuery from '../../queries/productInCartListQuery';
import handleCreateOrderDetails from '../../utils/handleCreateOrderDetails';
import OrderDetailService from '../../services/database/OrderDetailService';

const createOrders = async (req, res) => {
  const { tax_id, shipping_id, cart_id } = req.body;
  const { customer_id } = req.decoded;
  let total_amount = 0;

  const tax = await TaxService.findById(tax_id);

  if (tax === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'ORD_02',
        message: `Tax with tax_id ${tax_id} does not exist`,
        field: 'tax_id'
      }
    });
  }

  const shipping = await ShippingService.findById(shipping_id);

  if (shipping === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'ORD_02',
        message: `Shipping with shipping_id ${shipping_id} does not exist`,
        field: 'shipping_id'
      }
    });
  }

  const cart = await ShoppingCartService.findAllBy(
    productInCartListQuery({ cart_id, buy_now: true }, [], ['price', 'name', 'discounted_price'])
  );

  if (cart.length === 0) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'ORD_02',
        message: `Cart with cart_id ${cart_id} does not exist`,
        field: 'cart_id'
      }
    });
  }

  cart.map(({ quantity, Product: { price } }) => {
    total_amount += quantity * price;
  });

  total_amount += Number(shipping.shipping_cost);

  const orders = await OrderService.create({
    tax_id,
    shipping_id,
    total_amount,
    created_on: Date.now(),
    status: 1,
    customer_id
  });
  const { order_id } = orders;

  await handleCreateOrderDetails(order_id, cart, OrderDetailService);

  return res.status(200).send({ order_id });
};

export default createOrders;
