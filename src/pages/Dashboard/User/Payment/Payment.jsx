import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripPromise = loadStripe(import.meta.env.VITE_payment_secret_key);
const Payment = () => {
  return (
    <Elements stripe={stripPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
