import CategoryService from '../../services/database/CategoryService';
import ProductCategoryService from '../../services/database/ProductCategoryService';
import filterProductCategoryByproductIdQuery from '../../queries/filterProductCategoryByproductIdQuery';
import categoryWithDepartmentBycategoryIdQuery from '../../queries/categoryWithDepartmentBycategoryIdQuery';
import normalizeProductLocationData from '../../utils/normalizeProductLocationData';

const getProductDetails = async (req, res) => {
  const categoryInproduct = await ProductCategoryService.findOneBy(
    filterProductCategoryByproductIdQuery(req.params.id)
  );

  if (categoryInproduct === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'PRO_02',
        message: 'This product does not belong to any category',
        field: 'NoProductCategory'
      }
    });
  }

  const productLocation = await CategoryService.findById(
    categoryInproduct.category_id,
    categoryWithDepartmentBycategoryIdQuery(['description'])
  );

  if (productLocation === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'PRO_02',
        message: 'This product does not have location',
        field: 'NoProductCategory'
      }
    });
  }

  const mormalizedProductLocation = normalizeProductLocationData(productLocation);

  return res.status(200).send(mormalizedProductLocation);
};

export default getProductDetails;
