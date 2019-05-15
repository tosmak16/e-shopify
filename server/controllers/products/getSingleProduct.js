import ProductService from '../../services/database/ProductService';
import CacheService from '../../services/DataCache/CacheService';

const cache = new CacheService(); // Create a new cache service instance

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  let product;
  const cacheKey = `${id}getSingleProduct`;
  const cachedProduct = await cache.get(cacheKey);

  if (cachedProduct !== null) {
    product = cachedProduct;
  } else {
    product = await ProductService.findById(id);
  }

  if (product === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'PRO_02',
        message: 'Product does not exist',
        field: 'NoProduct'
      }
    });
  }
  cache.set(cacheKey, product);

  return res.status(200).send(product);
};

export default getSingleProduct;
