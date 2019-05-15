import handleFetchProducts from '../../utils/handleFetchProducts';
import ProductService from '../../services/database/ProductService';
import CacheService from '../../services/DataCache/CacheService';

const cache = new CacheService(); // Create a new cache service instance

const getProducts = async (req, res) => {
  let products;
  const { offset, limit, descriptionLength } = req.normalizePaginationParams;

  const cacheKey = `${offset}${limit}${descriptionLength}getProducts`;
  const cachedProducts = await cache.get(cacheKey);

  if (cachedProducts !== null) {
    products = cachedProducts;
  } else {
    products = await handleFetchProducts({ offset, limit }, descriptionLength, ProductService);
    cache.set(cacheKey, products);
  }

  return res.status(200).send(products);
};

export default getProducts;
