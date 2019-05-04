import { Attribute } from '../../db';

class AttributeService {
  static async findById(id, filterConditions = {}) {
    const result = await Attribute.findByPk(id, filterConditions);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await Attribute.findAll(modelData);
    return result;
  }
}

export default AttributeService;
