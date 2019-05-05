import { ShoppingCart } from '../../db';

class ShoppingCartService {
  static async create(modelData) {
    const result = await ShoppingCart.create(modelData);
    return result;
  }

  static async findById(id) {
    const result = await ShoppingCart.findByPk(id);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await ShoppingCart.findAll(modelData);
    return result;
  }

  static async findOneBy(modelData) {
    const result = await ShoppingCart.findOne(modelData);
    return result;
  }

  static async findOrCreate(modelData) {
    const result = await ShoppingCart.findOrCreate(modelData);
    return result;
  }

  static async delete(modelData = {}) {
    const result = await ShoppingCart.destroy(modelData);
    return result;
  }
}

export default ShoppingCartService;
