import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useCart from '../../../../hooks/useCart';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const [errors, setErrors] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  // console.log('cart at checkout form', cart.cart);
  const { user } = useAuth();
  const totalPrice = cart?.cart?.items?.reduce(
    (sum, item) => sum + item.menuItemId.price + item.quantity,
    0
  );

  useEffect(() => {
    axiosSecure
      .post('/create-payment-intent', { price: totalPrice })
      .then((res) => {
        console.log('client secret form checkout page', res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setErrors(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setErrors('');
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });

    if (confirmError) {
      console.log('confirm error');
    } else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // save payment in database
        const payment = {
          email: user.email,
          totalPrice: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cardId: cart.cart._id,
          menuItemIds: cart.cart.items.map((item) => item.menuItemId._id),
          status: 'pending',
        };
        const res = await axiosSecure.post('/payments', payment);
        console.log('send payment data in database and res', res.data);
        if (res.data.success) {
          refetch();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Payment successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard/paymenthistory');
        }
      }
    }
  };

  return (
    <div className="w-96 mx-auto mt-11">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className="bg-[#D1A054] py-3.5 px-4 rounded-xl cursor-pointer mt-7"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <p className="text-red-600">{errors}</p>
        {transactionId && (
          <p className="text-green-600">Your transaction Id: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
