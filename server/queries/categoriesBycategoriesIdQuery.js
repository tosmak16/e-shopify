import { Op } from 'sequelize';

export default categoriesIdList => ({
  where: { category_id: { [Op.in]: categoriesIdList } },
  attributes: { exclude: ['description'] }
});
