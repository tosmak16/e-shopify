import ProductService from '../services/database/ProductService';
import normalizeProductsListData from './normalizeProductsListData';

const handleFetchProducts = async (filterParam, descriptionLength) => {
  let products = await ProductService.findAndCountAll(filterParam);

  if (descriptionLength < 200 && products.rows.length > 0) {
    products = normalizeProductsListData(products, descriptionLength);
  }
  return products;
};

export default handleFetchProducts;
