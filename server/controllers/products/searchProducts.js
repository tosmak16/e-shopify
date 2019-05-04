import { Op } from 'sequelize';

import handleFetchProducts from '../../utils/handleFetchProducts';
import ProductService from '../../services/database/ProductService';

const searchProducts = async (req, res) => {
  const { offset, limit, descriptionLength, queryString, allWords } = req.normalizePaginationParams;

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

  const shouldBeAllWorld =
    allWords === 'on'
      ? queryString
      : {
          [Op.startsWith]: queryString
        };

  const filterConditions = {
    name: shouldBeAllWorld
  };
  const products = await handleFetchProducts(
    { where: filterConditions, offset, limit },
    descriptionLength,
    ProductService
  );

  return res.status(200).send(products);
};

export default searchProducts;