import React from "react";

const ProductInfo = ({ info,setbuymodal }) => {
  const { picture, name, location, resell, real, use, seller_name } = info;
  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
          <p>{resell}</p>
          <p>{real}</p>
          <p>{use}</p>
          <p>{seller_name}</p>
         
          <label htmlFor="Model" 
          onClick={()=>setbuymodal(info)}
          className="btn btn-outline btn-warning">Book now</label>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
