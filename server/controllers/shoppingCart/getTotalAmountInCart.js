import ShoppingCartService from '../../services/database/ShoppingCartService';
import productInCartListQuery from '../../queries/productInCartListQuery';

const getTotalAmountInCart = async (req, res) => {
  const cart_id = req.params.id;
  let total_amount = 0;

  const productInShippingCartList = await ShoppingCartService.findAllBy(
    productInCartListQuery({ cart_id, buy_now: true }, [
      'added_on',
      'cart_id',
      'buy_now',
      'product_id'
    ])
  );

  productInShippingCartList.map(({ quantity, Product: { price } }) => {
    total_amount += quantity * price;
  });

  return res.status(200).send({ total_amount });
};

export default getTotalAmountInCart;
