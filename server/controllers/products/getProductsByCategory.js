import handleFetchProducts from '../../utils/handleFetchProducts';
import ProductService from '../../services/database/ProductService';
import productsInCategoryQuery from '../../queries/productsInCategoryQuery';

const getProductsByCategory = async (req, res) => {
  const { offset, limit, descriptionLength } = req.normalizePaginationParams;
  const { id } = req.params;

  const products = await handleFetchProducts(
    productsInCategoryQuery({ offset, limit, category_id: id }),
    descriptionLength,
    ProductService
  );

  return res.status(200).send(products);
};

export default getProductsByCategory;
