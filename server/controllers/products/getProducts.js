import { isUndefined } from 'lodash';
import ProductService from '../../services/database/ProductService';
import normalizeProductsListData from '../../utils/normalizeProductsListData';

const getProducts = async (req, res) => {
  const { page, limit, description_length } = req.query;
  const defaultPage = 0;
  const defaultLimit = 200;

  const normalizedOffset = !isUndefined(page) && page.match(/[0-9]$/) ? Number(page) : defaultPage;
  const normalizedLimit =
    !isUndefined(limit) && limit.match(/[0-9]$/) ? Number(limit) : defaultLimit;

  let products = await ProductService.findAndCountAll({
    offset: normalizedOffset,
    limit: normalizedLimit
  });

  if (
    !isUndefined(description_length) &&
    description_length.match(/[0-9]$/) &&
    products.rows.length > 0
  ) {
    products = normalizeProductsListData(products, description_length);
  }

  return res.status(200).send(products);
};

export default getProducts;
