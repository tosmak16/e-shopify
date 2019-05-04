import DepartmentService from '../../services/database/DepartmentService';

const getSingleDepartment = async (req, res) => {
  const department = await DepartmentService.findById(req.params.id);

  if (department === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'DEP_02',
        message: 'Department does not exist',
        field: 'NoDepartments'
      }
    });
  }

  return res.status(200).send(department);
};

export default getSingleDepartment;
