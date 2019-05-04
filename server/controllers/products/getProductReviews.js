import ReviewsService from '../../services/database/ReviewsService';
import productReviewsQuery from '../../queries/productReviewsQuery';
import normalizeProductReviewData from '../../utils/normalizeProductReviewData';

const getProductReviews = async (req, res) => {
  const reviews = await ReviewsService.findAllBy(productReviewsQuery(req.params.id));
  if (reviews.length === 0) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'PRO_02',
        message: 'Product reviews does not exist',
        field: 'NoProductReviews'
      }
    });
  }
  const nomalilizedProductReviews = normalizeProductReviewData(reviews);

  return res.status(200).send(nomalilizedProductReviews);
};

export default getProductReviews;
