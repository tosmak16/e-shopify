import { Category } from '../../db';

class CategoryService {
  static async findById(id) {
    const result = await Category.findByPk(id);
    return result;
  }

  static async findAllBy(modelData) {
    const result = await Category.findAll(modelData);
    return result;
  }
}

export default CategoryService;
