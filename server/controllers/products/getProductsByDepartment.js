import handleFetchProducts from '../../utils/handleFetchProducts';
import categoriesBydepartmentQuery from '../../queries/categoriesBydepartmentQuery';
import CategoryService from '../../services/database/CategoryService';
import ProductService from '../../services/database/ProductService';
import productsByCategoryList from '../../queries/productsByCategoryList';
import CacheService from '../../services/DataCache/CacheService';

const cache = new CacheService(); // Create a new cache service instance

const getProductsByDepartment = async (req, res) => {
  const { offset, limit, descriptionLength } = req.normalizePaginationParams;
  const { id } = req.params;
  let products;
  let categoriesListByDepartment;

  // Get and cache categoriesListInDepartment

  const cachedKeyOne = `${offset}${limit}${descriptionLength}${id}categoriesBydepartment`;
  const cachedCategoriesListByDepartment = await cache.get(cachedKeyOne);

  if (cachedCategoriesListByDepartment !== null) {
    categoriesListByDepartment = cachedCategoriesListByDepartment;
  } else {
    categoriesListByDepartment = await CategoryService.findAllBy(categoriesBydepartmentQuery(id));
    cache.set(cachedKeyOne, categoriesListByDepartment);
  }

  // Get and cache productsList

  const cacheKeyTwo = `${offset}${limit}${descriptionLength}${id}getProductsByDepartment`;
  const cacheProducts = await cache.get(cacheKeyTwo);

  if (cacheProducts !== null) {
    products = cacheProducts;
  } else {
    const categoriesIdInDepartmentList = categoriesListByDepartment.map(item => item.category_id);
    products = await handleFetchProducts(
      productsByCategoryList({ offset, limit, categoriesIdInDepartmentList }),
      descriptionLength,
      ProductService
    );
    cache.set(cacheKeyTwo, products);
  }

  return res.status(200).send(products);
};

export default getProductsByDepartment;
