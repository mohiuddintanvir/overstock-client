import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const Calander = ({bookingdate,setbookingdate}) => {
  

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <DayPicker 
      mode="single"
      selected={bookingdate}
      onSelect={setbookingdate}
      />
      <p>You picked {format(bookingdate, 'PP')}.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Calander;