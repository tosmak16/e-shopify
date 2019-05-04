export default ({ offset, limit, order }) => ({
  offset,
  limit,
  order: order ? [order] : []
});
