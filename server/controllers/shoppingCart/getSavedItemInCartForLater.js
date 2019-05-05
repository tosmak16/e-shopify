import normalizeProductInCartData from '../../utils/normalizeProductInCartData';
import ShoppingCartService from '../../services/database/ShoppingCartService';
import productInCartListQuery from '../../queries/productInCartListQuery';

const getSavedItemInCartForLater = async (req, res) => {
  const cart_id = req.params.id;

  const productInShippingCartList = await ShoppingCartService.findAllBy(
    productInCartListQuery({ cart_id, buy_now: false }, [
      'added_on',
      'cart_id',
      'buy_now',
      'product_id',
      'quantity'
    ])
  );

  const normalizedProductInCartData = normalizeProductInCartData(productInShippingCartList);

  return res.status(200).send(normalizedProductInCartData);
};

export default getSavedItemInCartForLater;
