import { Tax } from '../../db';

class TaxService {
  static async findById(id) {
    const result = await Tax.findByPk(id);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await Tax.findAll(modelData);
    return result;
  }
}

export default TaxService;
