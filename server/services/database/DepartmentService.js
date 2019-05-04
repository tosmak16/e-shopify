import { Department } from '../../db';

class DepartmentService {
  static async findById(id) {
    const result = await Department.findByPk(id);
    return result;
  }

  static async findAllBy(modelData = {}) {
    const result = await Department.findAll(modelData);
    return result;
  }
}

export default DepartmentService;
