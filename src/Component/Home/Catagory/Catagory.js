import React, { useEffect, useState } from "react";
import CatagoryInfo from "./info/CatagoryInfo";

const Catagory = () => {
  const [productdata,setproductdata]=useState([])
  useEffect(()=>{
    fetch(`https://over-stcok-server.vercel.app/products`)
    .then(res=>res.json())
    .then(data=>setproductdata(data))
  },[])
  return (
    <div className='grid grid-cols-3'>
  
      
      {
        productdata.map(product=><CatagoryInfo product={product}></CatagoryInfo>)
      }
    </div>
  );
};

export default Catagory;
