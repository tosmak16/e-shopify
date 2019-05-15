import handleFetchProducts from '../../utils/handleFetchProducts';
import ProductService from '../../services/database/ProductService';
import productsInCategoryQuery from '../../queries/productsInCategoryQuery';
import CacheService from '../../services/DataCache/CacheService';

const cache = new CacheService();

const getProductsByCategory = async (req, res) => {
  const { offset, limit, descriptionLength } = req.normalizePaginationParams;
  const { id } = req.params;
  let products;

  const cacheKey = `${offset}${limit}${descriptionLength}${id}getProductsByCategory`;
  const cacheProducts = await cache.get(cacheKey);

  if (cacheProducts !== null) {
    products = cacheProducts;
  } else {
    products = await await handleFetchProducts(
      productsInCategoryQuery({ offset, limit, category_id: id }),
      descriptionLength,
      ProductService
    );
    cache.set(cacheKey, products);
  }

  return res.status(200).send(products);
};

export default getProductsByCategory;
