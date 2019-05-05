export default productInCartData =>
  productInCartData.map(
    ({ item_id, product_id, quantity, attributes, Product: { name, price } }) => ({
      item_id,
      product_id,
      quantity,
      attributes,
      name,
      price,
      subtotal: quantity * price || undefined
    })
  );
