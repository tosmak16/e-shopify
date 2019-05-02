import ProductService from '../../services/database/ProductService';

const getSingleProduct = async (req, res) => {
  const product = await ProductService.findById(req.params.Id);

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

export default getSingleProduct;
