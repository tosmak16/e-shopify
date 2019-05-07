import stripeChargeCustomerSchema from '../../schemas/stripeChargeCustomerSchema';

const validateStripeChargeCustomerData = (req, res, next) => {
  req.checkBody(stripeChargeCustomerSchema);
  const errors = req.validationErrors();
  return errors === false
    ? next()
    : res.status(400).send({
        error: {
          status: 400,
          code: 'STR_02',
          message: errors[0].msg,
          field: errors[0].param
        }
      });
};

export default validateStripeChargeCustomerData;
