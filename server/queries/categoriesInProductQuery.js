export default id => ({
  where: { product_id: id },
  attributes: ['category_id']
});
