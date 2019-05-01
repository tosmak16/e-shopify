import { Customer } from '../../db';

class CustomerService {
  static async create(modelData) {
    const result = await Customer.create({ ...modelData });
    return result;
  }

  static async findBy(modelData) {
    const result = await Customer.findOne({ where: { ...modelData } });
    return result;
  }
}

export default CustomerService;
