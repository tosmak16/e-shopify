export default (where = {}) => ({
  where,
  attributes: { exclude: ['customer_id'] }
});
