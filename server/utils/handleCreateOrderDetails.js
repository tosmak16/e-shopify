const handleCreateOrderDetails = async (order_id, cartList, OrderDetailService) => {
  await cartList.map(
    async ({
      item_id,
      product_id,
      quantity,
      attributes,
      Product: { name, price, discounted_price }
    }) => {
      await OrderDetailService.findOrCreate({
        where: {
          item_id
        },
        defaults: {
          item_id,
          order_id,
          product_id,
          attributes,
          product_name: name,
          quantity,
          unit_cost: Number(discounted_price) !== Number('0.00') ? discounted_price : price
        }
      });
    }
  );
};

export default handleCreateOrderDetails;
