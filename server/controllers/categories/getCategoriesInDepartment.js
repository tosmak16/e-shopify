import CategoryService from '../../services/database/CategoryService';
import categoriesInDepartmentQuery from '../../queries/categoriesInDepartmentQuery';

const getCategoriesInDepartment = async (req, res) => {
  const department_id = req.params.id;

  const categories = await CategoryService.findAllBy(categoriesInDepartmentQuery(department_id));

  if (categories.length === 0) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'CAT_01',
        message: `No categories match department Id: ${department_id}`,
        field: 'NoCategoryInDepartment'
      }
    });
  }

  return res.status(200).send(categories);
};

export default getCategoriesInDepartment;
