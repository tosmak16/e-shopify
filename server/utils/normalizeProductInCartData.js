export default productInCartData =>
  productInCartData.map(
    ({ item_id, quantity, attributes, Product: { name, price, image, product_id } }) => ({
      item_id,
      product_id,
      quantity,
      attributes,
      name,
      price,
      image,
      subtotal: (quantity * price).toFixed(2) || undefined
    })
  );
