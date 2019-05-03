import { Op } from 'sequelize';

import { ProductCategory } from '../db';

export default ({ offset, limit, categoriesIdInDepartmentList }) => ({
  include: [
    {
      model: ProductCategory,
      required: true,
      where: { category_id: { [Op.in]: categoriesIdInDepartmentList } },
      attributes: []
    }
  ],
  attributes: { exclude: ['image', 'image_2'] },
  offset,
  limit
});
