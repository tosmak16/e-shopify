import ProductService from '../../services/database/ProductService';
import productDetailsQuery from '../../queries/productDetailsQuery';

const getProductDetails = async (req, res) => {
  const product = await ProductService.findOneBy(productDetailsQuery(req.params.id));

  if (product === null) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'PRO_02',
        message: 'Product does not exist',
        field: 'NoProduct'
      }
    });
  }
  return res.status(200).send(product);
};

export default getProductDetails;
