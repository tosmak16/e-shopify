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

  static async findById(id) {
    const result = await Customer.findByPk(id);
    return result;
  }

  static async update(customer, newCustormerData) {
    const { name, email, day_phone, password, eve_phone, mob_phone } = newCustormerData;

    await customer.update({
      name: name || customer.name,
      email: email || customer.email,
      day_phone: day_phone || customer.day_phone,
      eve_phone: eve_phone || customer.eve_phone,
      mob_phone: mob_phone || customer.mob_phone,
      password: password || customer.password
    });

    return customer;
  }
}

export default CustomerService;
