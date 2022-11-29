import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Calander from "./calander/Calander";
import ProductInfo from "./Info/ProductInfo";
import Model from "./Modal/Model";


const ProductCatagory = () => {
  const categorydata=useLoaderData();
  const[buymodal,setbuymodal]=useState(null);
  const [bookingdate,setbookingdate]=useState(new Date());


console.log(categorydata)




  return (
    <section>
 
      <div>
      {categorydata.map((product) => (
        
        <ProductInfo
        setbuymodal={setbuymodal}
        key={product.id} 
        product={product}
        ></ProductInfo>
      
      ))}
    </div>
    {buymodal&&
      <Model bookingdate={bookingdate}setbuymodal={setbuymodal}  buymodal={buymodal} ></Model>
    }

    </section>
    
  );
};

export default ProductCatagory;
