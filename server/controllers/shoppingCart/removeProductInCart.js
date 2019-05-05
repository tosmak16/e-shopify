import ShoppingCartService from '../../services/database/ShoppingCartService';
import addproductInShoppingCartQuery from '../../queries/addproductInShoppingCartQuery';

const removeProductInCart = async (req, res) => {
  const item_id = req.params.id;

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

  await ShoppingCartService.delete(addproductInShoppingCartQuery({ item_id }));
  return res.status(200).send();
};

export default removeProductInCart;
