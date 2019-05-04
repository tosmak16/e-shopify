import { Op } from 'sequelize';

import { Attribute } from '../db';

export default attributesValueIdList => ({
  where: { attribute_id: { [Op.in]: attributesValueIdList } },
  attributes: { exclude: ['attribute_id'] },
  include: [
    {
      model: Attribute,
      required: true,
      attributes: { exclude: ['attribute_id'] }
    }
  ]
});
