import CategoryService from '../../services/database/CategoryService';
import categoryListQuery from '../../queries/categoryListQuery';

const getCategories = async (req, res) => {
  const { offset, limit, order } = req.normalizePaginationParams;

  const categories = await CategoryService.findAllBy(categoryListQuery({ offset, limit, order }));

  return res.status(200).send(categories);
};

export default getCategories;
