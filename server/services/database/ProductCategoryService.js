import { ProductCategory, Product } from '../../db';

class ProductCategoryService {
  static async findAndCountAll(modelData) {
    const result = await Product.findAndCountAll(modelData);
    return result;
  }

  static async findOneBy(modelData) {
    const result = await ProductCategory.findOne(modelData);
    return result;
  }
}

export default ProductCategoryService;
