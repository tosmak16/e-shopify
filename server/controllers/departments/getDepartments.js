import DepartmentService from '../../services/database/DepartmentService';

const getDepartments = async (req, res) => {
  const departments = await DepartmentService.findAllBy();

  if (departments.length === 0) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'DEP_02',
        message: 'Departments does not exist',
        field: 'NoDepartments'
      }
    });
  }

  return res.status(200).send(departments);
};

export default getDepartments;
