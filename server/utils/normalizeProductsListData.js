const normalizeProductsListData = (productData, descriptionLength) => {
  productData.rows.map(product => {
    const shouldUsePeriod = product.description.length <= descriptionLength ? '' : '...';
    product.description = `${product.description.slice(0, descriptionLength)}${shouldUsePeriod}`;
    return product;
  });

  return productData;
};

export default normalizeProductsListData;
