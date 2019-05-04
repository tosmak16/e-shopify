export default product_id => ({
  where: { product_id },
  attributes: ['attribute_value_id']
});
