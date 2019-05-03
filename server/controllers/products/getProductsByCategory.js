import handleFetchProducts from '../../utils/handleFetchProducts';
import ProducCategoryService from '../../services/database/ProducCategoryService';

const getProductsByCategory = async (req, res) => {
  const { offset, limit, descriptionLength } = req.normalizePaginationParams;
  const { id } = req.params;

  const products = await handleFetchProducts(
    { offset, limit, category_id: id },
    descriptionLength,
    ProducCategoryService
  );

  return res.status(200).send(products);
};

export default getProductsByCategory;
