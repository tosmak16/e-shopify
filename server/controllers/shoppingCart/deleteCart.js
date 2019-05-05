import ShoppingCartService from '../../services/database/ShoppingCartService';
import addproductInShoppingCartQuery from '../../queries/addproductInShoppingCartQuery';

const deleteCart = async (req, res) => {
  const cart_id = req.params.id;

  const shoppingCart = await ShoppingCartService.findOneBy(
    addproductInShoppingCartQuery({ cart_id })
  );

  if (shoppingCart === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'SHC_02',
        message: `Shopping cart with cart id ${cart_id} does not exist`,
        field: 'cart_id'
      }
    });
  }

  await ShoppingCartService.delete(addproductInShoppingCartQuery({ cart_id }));
  return res.status(200).send([]);
};

export default deleteCart;
