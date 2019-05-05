import { ShippingRegion } from '../../db';

class ShippingRegionService {
  static async findById(id) {
    const result = await ShippingRegion.findByPk(id);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await ShippingRegion.findAll(modelData);
    return result;
  }
}

export default ShippingRegionService;
