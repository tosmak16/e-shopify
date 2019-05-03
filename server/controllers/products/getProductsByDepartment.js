import handleFetchProducts from '../../utils/handleFetchProducts';
import categoriesBydepartmentQuery from '../../queries/categoriesBydepartmentQuery';
import CategoryService from '../../services/database/CategoryService';
import ProductService from '../../services/database/ProductService';
import productsByCategoryList from '../../queries/productsByCategoryList';

const getProductsByDepartment = async (req, res) => {
  const { offset, limit, descriptionLength } = req.normalizePaginationParams;
  const { id } = req.params;
  const categoriesListByDepartment = await CategoryService.findAllBy(
    categoriesBydepartmentQuery(id)
  );
  const categoriesIdInDepartmentList = categoriesListByDepartment.map(item => item.category_id);

  const products = await handleFetchProducts(
    productsByCategoryList({ offset, limit, categoriesIdInDepartmentList }),
    descriptionLength,
    ProductService
  );

  return res.status(200).send(products);
};

export default getProductsByDepartment;
