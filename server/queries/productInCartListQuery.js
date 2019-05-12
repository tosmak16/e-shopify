import { Product } from '../db';

export default (
  where = {},
  arrayOfAttributesToEclude = [],
  includeAttributesList = ['name', 'price', 'image']
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
