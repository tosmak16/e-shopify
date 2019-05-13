const removeProductInCartHandler = (state, data) => {
  const { itemId } = data;
  const updatedProductInCart = [...state.data.cartItemList.filter(item => item.item_id !== itemId)];
  return updatedProductInCart;
};

export default removeProductInCartHandler;
