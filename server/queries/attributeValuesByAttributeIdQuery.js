export default attribute_id => ({
  where: { attribute_id },
  attributes: { exclude: ['attribute_id'] }
});
