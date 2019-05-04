import { AttributeValue } from '../../db';

class AttributeValueService {
  static async findById(id, filterConditions = {}) {
    const result = await AttributeValue.findByPk(id, filterConditions);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await AttributeValue.findAll(modelData);
    return result;
  }
}

export default AttributeValueService;
