import ReviewsService from '../../services/database/ReviewsService';
import ProductService from '../../services/database/ProductService';

const addProductReviews = async (req, res) => {
  const product_id = req.params.id;
  const { customer_id } = req.decoded;
  const product = await ProductService.findById(product_id);

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
  const { review, rating } = req.body;

  const newProductReviews = await ReviewsService.create({
    rating,
    review,
    product_id,
    customer_id,
    created_on: Date.now()
  });
  //   const nomalilizedProductReviews = normalizeProductReviewData(reviews);

  return res.status(200).send(newProductReviews);
};

export default addProductReviews;
