const stripeService = {};
const StripeLoadTimer = setInterval(() => {
  if (window.Stripe) {
    stripeService.Stripe = window.Stripe;
    stripeService.Stripe.setPublishableKey(process.env.stripe_publish_key);
    stripeService.createToken = stripeService.Stripe.card.createToken;
    clearInterval(StripeLoadTimer);
  }
}, 100);

export default stripeService;
