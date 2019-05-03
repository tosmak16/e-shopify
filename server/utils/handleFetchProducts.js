import normalizeProductsListData from './normalizeProductsListData';

const handleFetchProducts = async (filterParam, descriptionLength, DbService) => {
  let products = await DbService.findAndCountAll(filterParam);

  if (descriptionLength < 200 && products.rows.length > 0) {
    products = normalizeProductsListData(products, descriptionLength);
  }
  return products;
};

export default handleFetchProducts;
