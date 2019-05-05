import ShoppingCartService from '../../services/database/ShoppingCartService';
import addproductInShoppingCartQuery from '../../queries/addproductInShoppingCartQuery';
import productInCartListQuery from '../../queries/productInCartListQuery';
import normalizeProductInCartData from '../../utils/normalizeProductInCartData';

const updateCartItem = async (req, res) => {
  const item_id = req.params.id;
  const { quantity } = req.body;

  const shoppingCart = await ShoppingCartService.findOneBy(
    addproductInShoppingCartQuery({ item_id })
  );

  if (shoppingCart === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'SHC_02',
        message: `Shopping cart with item ${item_id} does not exist`,
        field: 'item_id'
      }
    });
  }

  await shoppingCart.update({
    quantity
  });

  const productInShippingCartList = await ShoppingCartService.findAllBy(
    productInCartListQuery({ cart_id: shoppingCart.cart_id }, [
      'added_on',
      'cart_id',
      'buy_now',
      'product_id'
    ])
  );

  const normalizedProductInCartData = normalizeProductInCartData(productInShippingCartList);

  return res.status(200).send(normalizedProductInCartData);
};

export default updateCartItem;
