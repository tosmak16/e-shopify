import ShoppingCartService from '../../services/database/ShoppingCartService';
import ProductService from '../../services/database/ProductService';
import addproductInShoppingCartQuery from '../../queries/addproductInShoppingCartQuery';
import normalizeProductInCartData from '../../utils/normalizeProductInCartData';
import productInCartListQuery from '../../queries/productInCartListQuery';

const addProductInCart = async (req, res) => {
  const { item_id, product_id, attributes, cart_id } = req.body;
  const product = await ProductService.findById(req.body.product_id);
  const productInShippingCartFilter = { product_id, cart_id, attributes };

  if (product === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'PRO_02',
        message: 'Product does not exist',
        field: 'NoProduct'
      }
    });
  }

  const [productInShippingCart, created] = await ShoppingCartService.findOrCreate(
    addproductInShoppingCartQuery(
      productInShippingCartFilter,
      {
        item_id,
        product_id,
        attributes,
        cart_id,
        buy_now: true,
        added_on: Date.now(),
        quantity: 1
      },
      ['added_on', 'cart_id', 'buy_now']
    )
  );

  if (created === false) {
    await productInShippingCart.update({
      quantity: productInShippingCart.quantity + 1
    });
  }

  const productInShippingCartList = await ShoppingCartService.findAllBy(
    productInCartListQuery({ cart_id }, ['added_on', 'cart_id', 'buy_now'])
  );

  const normalizedProductInCartData = normalizeProductInCartData(productInShippingCartList);

  return res.status(200).send(normalizedProductInCartData);
};

export default addProductInCart;
