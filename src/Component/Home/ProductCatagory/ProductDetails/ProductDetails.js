import React from 'react';
import ProductInfo from '../Info/ProductInfo';

const ProductDetails = ({product,setbuymodal}) => {
    const{name,catagory}=product

    return (
        <div>
            <h1>{name}</h1>
          
            <div className='grid grid-cols-3 gap-4 border-2 border-sky-500'>
                {
catagory.map(info=><ProductInfo info={info} setbuymodal={setbuymodal}></ProductInfo>)
                }
            </div>
        </div>
    );
};

export default ProductDetails;