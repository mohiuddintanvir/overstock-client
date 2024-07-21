import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryInfo = ({ product }) => {
  const { catagory_name } = product;
console.log(product)
  return (
    <div className="flex justify-center items-center p-4">
      <div className="card flex flex-col items-center w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{catagory_name}</h1>
        <Link to={`/Products/${catagory_name}`}>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          <button className="btn btn-outline btn-info w-full py-3 text-lg">
            {catagory_name}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CatagoryInfo;
