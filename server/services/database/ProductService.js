import { Product } from '../../db';

class ProductService {
  static async findAndCountAll(modelData = {}) {
    const result = await Product.findAndCountAll(modelData);
    return result;
  }

  static async findById(id) {
    const result = await Product.findByPk(id);
    return result;
  }

  static async findOneBy(modelData) {
    const result = await Product.findOne(modelData);
    return result;
  }
}

export default ProductService;
