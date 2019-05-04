import { Category } from '../../db';

class CategoryService {
  static async findById(id, filterConditions = {}) {
    const result = await Category.findByPk(id, filterConditions);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await Category.findAll(modelData);
    return result;
  }
}

export default CategoryService;
