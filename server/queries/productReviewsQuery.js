import { Customer } from '../db';

export default id => ({
  where: { product_id: id },
  attributes: { exclude: ['customer_id', 'product_id', 'review_id'] },
  include: [
    {
      model: Customer,
      required: true,
      attributes: ['name']
    }
  ]
});
