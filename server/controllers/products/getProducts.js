import handleFetchProducts from '../../utils/handleFetchProducts';
import ProductService from '../../services/database/ProductService';

const getProducts = async (req, res) => {
  const { offset, limit, descriptionLength } = req.normalizePaginationParams;

  const products = await handleFetchProducts({ offset, limit }, descriptionLength, ProductService);

  return res.status(200).send(products);
};

export default getProducts;
