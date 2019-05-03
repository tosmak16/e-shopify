import { Department } from '../../db';

class DepartmentService {
  static async findById(id) {
    const result = await Department.findByPk(id);
    return result;
  }
}

export default DepartmentService;
