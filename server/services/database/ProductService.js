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
}

export default ProductService;
