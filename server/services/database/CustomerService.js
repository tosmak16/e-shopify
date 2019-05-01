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
    const {
      name,
      email,
      day_phone,
      password,
      eve_phone,
      mob_phone,
      address_1,
      address_2,
      city,
      postal_code,
      shipping_region_id,
      country,
      region
    } = newCustormerData;

    await customer.update({
      name: name || customer.name,
      email: email || customer.email,
      day_phone: day_phone || customer.day_phone,
      eve_phone: eve_phone || customer.eve_phone,
      mob_phone: mob_phone || customer.mob_phone,
      password: password || customer.password,
      address_1: address_1 || customer.address_1,
      address_2: address_2 || customer.address_2,
      city: city || customer.city,
      region: region || customer.region,
      postal_code: postal_code || customer.postal_code,
      country: country || customer.country,
      shipping_region_id: shipping_region_id || customer.shipping_region_id
    });

    return customer;
  }
}

export default CustomerService;
