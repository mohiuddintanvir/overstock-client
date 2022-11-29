import React from "react";

const ProductInfo = ({ product,setbuymodal }) => {
  const { picture, name, location, resell, real, use, seller_name } = product;
  return (
    <div className=" p-20">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 h-60" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
          <p>{resell}</p>
          <p>{real}</p>
          <p>{use}</p>
          <p>{seller_name}</p>
         
          <label htmlFor="Model" 
          onClick={()=>setbuymodal(product)}
          className="btn btn-outline btn-warning">Book now</label>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
