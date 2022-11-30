import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ paymentdata }) => {
  const [clientSecret, setClientSecret] = useState("");

  const { resell, seller_name, email } = paymentdata;

  const [carderror, setcarderror] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  // payment api call by useEffect
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://over-stcok-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price:resell }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resell]);

  // on submit call back function
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setcarderror(error.message);
    } else {
      setcarderror("");
    }

    const { paymentIntent, error: confirmerror } =
      await stripe.confirmCardPayment(
        clientSecret,
     {
        payment_method: {
          card: card,
          billing_details: {
            name: seller_name,
            email: email,
          },
        },
      }
      );
    if (confirmerror) {
        setcarderror(confirmerror.message);
        return;
    }
    console.log('paymentIntent',paymentIntent)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{carderror}</p>
    </>
  );
};

export default CheckOutForm;
