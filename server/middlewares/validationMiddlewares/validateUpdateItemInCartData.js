import updateItemInCartSchema from '../../schemas/updateItemInCartSchema';

const validateUpdateItemInCartData = (req, res, next) => {
  req.checkBody(updateItemInCartSchema);
  const errors = req.validationErrors();
  return errors === false
    ? next()
    : res.status(400).send({
        error: {
          status: 400,
          code: 'SHC_02',
          message: errors[0].msg,
          field: errors[0].param
        }
      });
};

export default validateUpdateItemInCartData;
