import CategoryService from '../../services/database/CategoryService';
import ProductCategoryService from '../../services/database/ProductCategoryService';
import categoriesInProductQuery from '../../queries/categoriesInProductQuery';
import categoriesBycategoriesIdQuery from '../../queries/categoriesBycategoriesIdQuery';

const getCategoriesInProduct = async (req, res) => {
  const product_id = req.params.id;

  const categoriesInProductCategory = await ProductCategoryService.findAllBy(
    categoriesInProductQuery(product_id)
  );

  if (categoriesInProductCategory.length === 0) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'CAT_01',
        message: `No categories match product Id: ${product_id}`,
        field: 'NoCategoryInProduct'
      }
    });
  }

  const normalizedCategoriesInProductCategory = categoriesInProductCategory.map(item =>
    Number(item.category_id)
  );

  const categories = await CategoryService.findAllBy(
    categoriesBycategoriesIdQuery(normalizedCategoriesInProductCategory)
  );

  return res.status(200).send(categories);
};

export default getCategoriesInProduct;
