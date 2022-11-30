import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ paymentdata }) => {
  const [clientSecret, setClientSecret] = useState("");

  const { resell, seller_name, email ,_id} = paymentdata;

  const [carderror, setcarderror] = useState("");
  const [success, setsuccess] = useState("");
  const [processing, setprocessing] = useState(false);
  const [tranjectionId, settranjectionId] = useState("");

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
setprocessing(true)
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
    if(paymentIntent.status==="succeeded"){

const payment={
price: resell,
 transactionId:paymentIntent.id,
 email,
 bookingid:_id
}
fetch('https://over-stcok-server.vercel.app/payments',{
method:'POST',
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ payment }),
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.inertedId){
        setsuccess('Congratulation ! You successfull paid the payment')
        settranjectionId(paymentIntent.id);
        
    }
})

    };
   setprocessing(false);
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
          disabled={!stripe || !clientSecret||processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{carderror}</p>
      {
        success&& <div>
            <p className="text-green-400">{success} </p>
            <p>Your TranjectionId: <span>{tranjectionId}</span></p>
          
         
            
        </div>
      }
    </>
  );
};

export default CheckOutForm;
