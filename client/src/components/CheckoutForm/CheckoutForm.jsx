import { CardElement, injectStripe } from 'react-stripe-elements';

const CheckoutForm = props => {
  const submit = async ev => {
    let { token } = await props.stripe.createToken({ name: 'Name' });

    console.log(token);
  };

  return (
    <div className="checkout">
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button type="button" onClick={submit}>
        Send
      </button>
    </div>
  );
};

export default injectStripe(CheckoutForm);
