import customerLoginSchema from '../../schemas/customerLoginSchema';

const validateLoginData = (req, res, next) => {
  req.checkBody(customerLoginSchema);
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

export default validateLoginData;
