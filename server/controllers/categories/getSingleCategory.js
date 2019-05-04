import CategoryService from '../../services/database/CategoryService';

const getSingleCategory = async (req, res) => {
  const category = await CategoryService.findById(req.params.id);

  if (category === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'CAT_01',
        message: 'Category does not exist',
        field: 'NoCategory'
      }
    });
  }

  return res.status(200).send(category);
};

export default getSingleCategory;
