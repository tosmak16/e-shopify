import { ProductCategory, Product } from '../../db';

class ProductCategoryService {
  static async findAndCountAll(modelData) {
    const { category_id, offset, limit } = modelData;
    const result = await Product.findAndCountAll({
      include: [
        {
          model: ProductCategory,
          required: true,
          where: { category_id },
          attributes: []
        }
      ],
      offset,
      limit
    });
    return result;
  }
}

export default ProductCategoryService;
