import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './Checkoutform.js/CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {



    const paymentdata=useLoaderData();
  const{name,resell}=paymentdata
    return (
        <div>
           <h1 className="text-3xl text-purple-600">Payment For {name}</h1>
           <p className="text-xl">Please pay  <strong>${resell}</strong>  for your shoes</p>
           <div className='w-96 my-12'>
           <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
           </div>
        </div>
    );
};

export default Payment;