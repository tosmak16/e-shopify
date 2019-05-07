import { Orders } from '../../db';

class OrderService {
  static async create(modelData) {
    const result = await Orders.create(modelData);
    return result;
  }

  static async findById(id) {
    const result = await Orders.findByPk(id);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await Orders.findAll(modelData);
    return result;
  }

  static async findOneBy(modelData) {
    const result = await Orders.findOne(modelData);
    return result;
  }

  static async delete(modelData = {}) {
    const result = await Orders.destroy(modelData);
    return result;
  }
}

export default OrderService;
