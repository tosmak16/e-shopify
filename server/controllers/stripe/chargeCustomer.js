import Stripe from 'stripe';

const { STRIP_API_KEY } = process.env;

const stripe = Stripe(STRIP_API_KEY);

const chargeCustomer = async (req, res) => {
  const { stripeToken, order_id, description, amount, currency } = req.body;
  let result;

  try {
    result = await stripe.charges.create({
      amount,
      description,
      metadata: { order_id },
      currency: currency || 'USD',
      source: stripeToken
    });
  } catch (errors) {
    return res.status(400).send({
      error: {
        status: 400,
        code: 'STR_03',
        message: errors.message,
        field: errors.param
      }
    });
  }
  return res.status(200).send(result);
};

export default chargeCustomer;
