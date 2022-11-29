import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Calander from "./calander/Calander";
import Model from "./Modal/Model";
import ProductDetails from "./ProductDetails/ProductDetails";

const ProductCatagory = () => {
  
  const[buymodal,setbuymodal]=useState(null);
  const [bookingdate,setbookingdate]=useState(new Date());


  const{data:products=[],}=useQuery({
    queryKey:['products'],
    queryFn:async()=>{
       const res=await fetch("https://over-stcok-server.vercel.app/products");
    const data=await  res.json();
    return data;
    }
   
  })




  return (
    <section>
      <Calander bookingdate={bookingdate} setbookingdate={setbookingdate} ></Calander>
      <div>
      {products.map((product) => (
        <ProductDetails 
        setbuymodal={setbuymodal}
        key={product.id} 
        product={product}
        ></ProductDetails>
      ))}
    </div>
    {buymodal&&
      <Model bookingdate={bookingdate}setbuymodal={setbuymodal}  buymodal={buymodal} ></Model>
    }

    </section>
    
  );
};

export default ProductCatagory;
