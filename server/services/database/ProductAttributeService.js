import { ProductAttribute } from '../../db';

class ProductAttributeService {
  static async findAllBy(modelData = {}) {
    const result = await ProductAttribute.findAll(modelData);
    return result;
  }
}

export default ProductAttributeService;
