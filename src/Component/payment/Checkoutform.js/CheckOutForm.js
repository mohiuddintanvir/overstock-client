import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutForm = () => {
    const [carderror,setcarderror]=useState('');

const stripe=useStripe();
const  elements=useElements()

    // on submit call back function
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
           
            return;
          }

          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
          const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card,
          })

          
    if (error) {
        console.log(error);
        setcarderror(error.message);
      } else {
        setcarderror('');
      }
   
    };
    return (
        <>
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
        <button className='btn btn-sm mt-4 btn-primary' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <p className='text-red-500'>{carderror}</p>
        </>
    );
};

export default CheckOutForm;