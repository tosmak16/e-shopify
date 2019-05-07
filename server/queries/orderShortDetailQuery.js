export default (where = {}) => ({
  where,
  attributes: ['order_id', 'total_amount', 'created_on', 'shipped_on', 'status']
});
