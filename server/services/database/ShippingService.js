import { Shipping } from '../../db';

class ShippingService {
  static async findById(id) {
    const result = await Shipping.findByPk(id);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await Shipping.findAll(modelData);
    return result;
  }
}

export default ShippingService;
