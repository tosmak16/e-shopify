import Stripe from 'stripe';

import sendMailNotification from '../../utils/sendMail';

const { STRIP_API_KEY } = process.env;

const stripe = Stripe(STRIP_API_KEY);

const chargeCustomer = async (req, res) => {
  const { stripeToken, order_id, description, amount, currency } = req.body;
  const { email, name } = req.decoded;
  let result;

  try {
    result = await stripe.charges.create({
      amount: Math.round(amount.toFixed(2) * 100),
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

  sendMailNotification('hello', email, name);

  return res.status(200).send(result);
};

export default chargeCustomer;
