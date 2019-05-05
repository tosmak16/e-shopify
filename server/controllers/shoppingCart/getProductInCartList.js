import normalizeProductInCartData from '../../utils/normalizeProductInCartData';
import ShoppingCartService from '../../services/database/ShoppingCartService';
import productInCartListQuery from '../../queries/productInCartListQuery';

const getProductInCartList = async (req, res) => {
  const cart_id = req.params.id;

  const productInShippingCartList = await ShoppingCartService.findAllBy(
    productInCartListQuery({ cart_id, buy_now: true }, [
      'added_on',
      'cart_id',
      'buy_now',
      'product_id'
    ])
  );

  const normalizedProductInCartData = normalizeProductInCartData(productInShippingCartList);

  return res.status(200).send(normalizedProductInCartData);
};

export default getProductInCartList;
