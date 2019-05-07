import { Sequelize } from 'sequelize';

export default (where = {}) => ({
  where,
  attributes: [
    'order_id',
    'product_id',
    'attributes',
    'product_name',
    'quantity',
    'unit_cost',
    [Sequelize.literal('quantity * unit_cost'), 'subtotal']
  ]
});
