import { OrderDetail } from '../../db';

class OrderDetailService {
  static async findOrCreate(modelData) {
    const result = await OrderDetail.findOrCreate(modelData);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await OrderDetail.findAll(modelData);
    return result;
  }
}

export default OrderDetailService;
