import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const paymentdata=useLoaderData();
    console.log("bookingdata",paymentdata)
    return (
        <div>
           <h1 className="text-3xl text-purple-600">Payment For {paymentdata.name}</h1>
           <p className="text-xl">Please pay ${paymentdata.resell} for your shoes</p>
        </div>
    );
};

export default Payment;