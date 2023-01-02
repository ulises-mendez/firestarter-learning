import { PaymentElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    cc: '',
    expiration: '',
    code: '',
    country:'',
    postalCode:'',
    gst: '',
    qst: '',
})
  const onHandleChange = (e) => {
    setData(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/stripe`,
        //return_url: 'login',
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        'color': '#32325d',
        'fontFamily': '"Helvetica Neue", Helvetica, sans-serif',
        'fontSmoothing': 'antialiased',
        'fontSize': '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const handleSubmitSub = async (event) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: 'email@example.com',
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      axios.post(route('stripe.subscription'), {'payment_method': result.paymentMethod.id, 'email': 'email@example.com'});
      // eslint-disable-next-line camelcase
      const {client_secret, status} = res.data;

      if (status === 'requires_action') {
        stripe.confirmCardPayment(client_secret).then(function(result) {
          if (result.error) {
            console.log('There was an issue!');
            console.log(result.error);
            // Display error message in your UI.
            // The card was declined (i.e. insufficient funds, card has expired, etc)
          } else {
            console.log('You got the money!');
            // Show a success message to your customer
          }
        });
      } else {
        console.log('You got the money!');
        // No additional information was needed
        // Show a success message to your customer
      }
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmitSub}>
      <label htmlFor='firstName' className={`block text-sm text-gray-800 `} >
          First Name *
        </label>
      <TextInput
          type="text"
          name="firstName"
          value={data.firstName}
          className="mt-1 block w-full"
          autoComplete="first name"
          handleChange={onHandleChange}
      />
        <label htmlFor='lastName' className={`block text-sm text-gray-800 `} >
            Last Name *
        </label>
        <TextInput
          type="text"
          name="lastName"
          value={data.lastName}
          className="mt-1 block w-full"
          autoComplete="last name"
          
          handleChange={onHandleChange}
      />
     { /*
      <PaymentElement id="payment-element" />
      */}
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <div className='w-full'>
        <InputLabel forInput="gst" value="GST ID" />
        <TextInput
            type="text"
            name="gst"
            value={data.gst}
            className="mt-1 block w-full"
            handleChange={onHandleChange}
        />
        </div>
        <div className='w-full'>
        <InputLabel forInput="qst" value="PST/QST ID" />
        <TextInput
            type="text"
            name="qst"
            value={data.qst}
            className="mt-1 block w-full"
            handleChange={onHandleChange}
        />
        </div>
      </div>
      <button className="btn-orange my-4" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}