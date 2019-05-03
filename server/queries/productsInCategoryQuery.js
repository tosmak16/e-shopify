import { ProductCategory } from '../db';

export default ({ category_id, offset, limit }) => ({
  include: [
    {
      model: ProductCategory,
      required: true,
      where: { category_id },
      attributes: []
    }
  ],
  attributes: { exclude: ['image', 'image_2', 'display'] },
  offset,
  limit
});
