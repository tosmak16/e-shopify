export default productInCartData =>
  productInCartData.map(
    ({ item_id, product_id, quantity, attributes, Product: { name, price, image } }) => ({
      item_id,
      product_id,
      quantity,
      attributes,
      name,
      price,
      image,
      subtotal: quantity * price || undefined
    })
  );
