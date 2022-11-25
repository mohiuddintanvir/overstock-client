import React, { useEffect, useState } from "react";
import Model from "./Modal/Model";
import ProductDetails from "./ProductDetails/ProductDetails";

const ProductCatagory = () => {
  const [products, setproducts] = useState([]);
  const[buymodal,setbuymodal]=useState(null)

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      
      
      });
  }, []);
  return (
    <section>
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
      <Model  buymodal={buymodal} ></Model>
    }

    </section>
    
  );
};

export default ProductCatagory;
