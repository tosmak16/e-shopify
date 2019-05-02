import { Product } from '../../db';

class ProductService {
  static async findAndCountAll(modelData = {}) {
    const result = await Product.findAndCountAll(modelData);
    return result;
  }
}

export default ProductService;
