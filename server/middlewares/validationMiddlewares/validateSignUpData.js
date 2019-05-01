import customerSignupSchema from '../../schemas/customerSignupSchema';

const validateSignUpData = (req, res, next) => {
  req.checkBody(customerSignupSchema);
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

export default validateSignUpData;
