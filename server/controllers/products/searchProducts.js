import { Op } from 'sequelize';

import handleFetchProducts from '../../utils/handleFetchProducts';
import ProductService from '../../services/database/ProductService';
import CacheService from '../../services/DataCache/CacheService';

const cache = new CacheService(); // Create a new cache service instance

const searchProducts = async (req, res) => {
  const { offset, limit, descriptionLength, queryString, allWords } = req.normalizePaginationParams;
  let products;

  if (queryString === '') {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'PRO_02',
        message: `The param query_string is required`,
        field: 'query_string'
      }
    });
  }

  const cacheKey = `${offset}${limit}${descriptionLength}${queryString}${allWords}getProducts`;
  const cachedProducts = await cache.get(cacheKey);

  if (cachedProducts !== null) {
    products = cachedProducts;
  } else {
    const shouldBeAllWorld =
      allWords === 'on'
        ? queryString
        : {
            [Op.startsWith]: queryString
          };

    const filterConditions = {
      name: shouldBeAllWorld
    };
    products = await await handleFetchProducts(
      { where: filterConditions, offset, limit },
      descriptionLength,
      ProductService
    );
    cache.set(cacheKey, products);
  }

  return res.status(200).send(products);
};

export default searchProducts;
