import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://over-stcok-server-usx2-icrxtv27y.vercel.app/cards?email=${user.email}`;

  // Tanstack
  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings.name);

  return (
    <div>
      <h2 className="text-5xl font-bold">My Orders</h2>
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
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <img
                          src={booking.img}
                          alt=""
                          className=""
                        />
                      </div>
                      <div>
                        <div className="font-bold">{booking.name}</div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button>${booking.price}/</button>
                  </td>
                  <th>
                    {booking.resell && !booking.paid && (
                      <Link to={`/deshboard/payment/${booking._id}`}>
                        <button className="btn btn-primary">Pay</button>
                      </Link>
                    )}
                    {booking.resell && booking.paid && (
                      <span className="text-primary">Paid</span>
                    )}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
