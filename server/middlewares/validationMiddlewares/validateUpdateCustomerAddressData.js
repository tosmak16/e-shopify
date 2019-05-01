import customerAddressUpdateSchema from '../../schemas/customerAddressUpdateSchema';

const validateUpdateCustomerAddressData = (req, res, next) => {
  req.checkBody(customerAddressUpdateSchema);
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

export default validateUpdateCustomerAddressData;
