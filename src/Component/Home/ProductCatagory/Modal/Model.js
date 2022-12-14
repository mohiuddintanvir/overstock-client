import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Model = ({ buymodal,setbuymodal, bookingdate }) => {
  const { name, location, resell, seller_name } = buymodal;

  const date = format(bookingdate, "PP", "pp");
  const { user } = useContext(AuthContext);

  // modal post info
  const handlemodle = (event) => {
    event.preventDefault();
    const form = event.target;
    
    const email = form.email.value;

    const time = form.date.value;
    const location = form.location.value;
    const resell = form.resell.value;
    const seller_name = form.seller_name.value;

    const phone = form.phone.value;
    const booking = {
      email,
      name,
      resell,
      seller_name,
      location,
      phone,
      time,
    };
    fetch("https://over-stcok-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          setbuymodal(null);
        toast.success("successfully added your order");
        }
        
      });

    console.log(booking);
  };

  return (
    <>
      <input type="checkbox" id="Model" className="modal-toggle bg-glass" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Model"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1>{name}</h1>

          <form onSubmit={handlemodle} action="">
            <input
              type="text"
              name="date"
              value={date}
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
           
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              readOnly
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="resell"
              readOnly
              defaultValue={resell}
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="seller_name"
              defaultValue={seller_name}
              readOnly
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="location"
              defaultValue={location}
              
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Type your phone number"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <br />
            <button className="btn btn-outline btn-warning w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Model;
