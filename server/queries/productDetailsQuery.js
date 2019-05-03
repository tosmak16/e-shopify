export default id => ({
  where: { product_id: id },
  attributes: { exclude: ['display', 'thumbnail'] }
});
