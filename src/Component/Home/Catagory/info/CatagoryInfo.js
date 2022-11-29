import React from 'react';
import { Link } from 'react-router-dom';
import MainProducts from '../Mainproducts/MainProducts';

const CatagoryInfo = ({product}) => {
  const{catagory_name}=product
    return (
        <div >
        <div className="card   ">
        <div className="card-body">
            <Link to={`/Products/${catagory_name}`}><h1 className='p-10 bg-blue-500 border-2 border-sky-500 '>{catagory_name}</h1></Link>
            
         
        </div>
      </div>
        </div>
    );
};

export default CatagoryInfo;