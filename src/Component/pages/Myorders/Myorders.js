import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Myorders = () => {
  const{user}=useContext(AuthContext);


const url=`https://over-stcok-server.vercel.app/bookings?email=${user?.email}`


// tankstack
const {data:bookings=[]}=useQuery({
  queryKey:['bookings',user?.email],
  queryFn:async()=>{
    const res=await fetch(url,{
      headers:{
        authorization:`bearer${localStorage.getItem('accessToken')}`
      }
    })
    const data=await res.json();
    return data;
  }
})
console.log(bookings)
    return (
        <div>
          <h2 className='texl-5xl font-bold'>My orders</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
       
        <th>Title</th>
        <th>payment</th>
        <th>Payment</th>
        
      </tr>
    </thead>
    <tbody>
 {bookings &&
  bookings.map((booking,i)=><tr key={booking._id}>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
        
        </div>
        <div>
          <div className="font-bold">{booking.name}</div>
          <div className="text-sm opacity-50">{booking.location}</div>
        </div>
      </div>
    </td>
    <td>
    
         <button >${booking.resell}/</button>
    
      
    </td>
    
    <th>
    {booking.resell && !booking.paid &&
     <Link to={`/deshboard/payment/${booking._id}`}><button className="btn btn-primary">Pay</button></Link>
    }
    {
      booking.resell && booking.paid &&
      <span text-primary>paid</span>
    }
      
    </th>
  </tr>)
 }   
    

    </tbody>
   
   
  </table>
</div>
        </div>
    );
};

export default Myorders;