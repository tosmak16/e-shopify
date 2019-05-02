import customerUpdateCreditCardSchema from '../../schemas/customerUpdateCreditCardSchema';

const validateUpdateCustomerCreditCardData = (req, res, next) => {
  req.checkBody(customerUpdateCreditCardSchema);
  const errors = req.validationErrors();
  return errors === false
    ? next()
    : res.status(400).send({
        error: {
          status: 400,
          code: 'USR_02',
          message: errors[0].msg,
          field: errors[0].param
        }
      });
};

export default validateUpdateCustomerCreditCardData;
