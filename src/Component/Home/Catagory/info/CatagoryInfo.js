import React from 'react';
import { Link } from 'react-router-dom';
import MainProducts from '../Mainproducts/MainProducts';

const CatagoryInfo = ({product}) => {
  const{catagory_name}=product
    return (
        <div >
        <div className="card   ">
        <div className="grid grid-cols-1   mt-20 lg:grid lg:grid-cols-3 lg:gap-4 lg:ml-20 lg:mt-20">
            <Link to={`/Products/${catagory_name}`}> <button className="btn btn-outline btn-info lg:py-10 lg:px-40 lg:pb-15">{catagory_name}</button></Link>
            
         
        </div>
      </div>
        </div>
    );
};

export default CatagoryInfo;