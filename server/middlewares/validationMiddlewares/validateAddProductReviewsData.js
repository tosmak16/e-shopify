import addProductReviewsSchema from '../../schemas/addProductReviewsSchema';

const validateAddProductReviewsData = (req, res, next) => {
  req.checkBody(addProductReviewsSchema);
  const errors = req.validationErrors();
  return errors === false
    ? next()
    : res.status(400).send({
        error: {
          status: 400,
          code: 'PRO_02',
          message: errors[0].msg,
          field: errors[0].param
        }
      });
};

export default validateAddProductReviewsData;
