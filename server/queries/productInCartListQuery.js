import { Product } from '../db';

export default (
  where = {},
  arrayOfAttributesToEclude = [],
  includeAttributesList = ['name', 'price', 'image', 'product_id']
) => ({
  where,
  attributes: { exclude: arrayOfAttributesToEclude },
  include: [
    {
      model: Product,
      required: true,
      attributes: includeAttributesList
    }
  ]
});
