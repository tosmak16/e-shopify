import addproductInCartSchema from '../../schemas/addproductInCartSchema';

const validateProductInCartData = (req, res, next) => {
  req.checkBody(addproductInCartSchema);
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

export default validateProductInCartData;
