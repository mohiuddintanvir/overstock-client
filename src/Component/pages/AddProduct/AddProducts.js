import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const handleLogin = (data) => {
        fetch("https://over-stcok-server.vercel.app/categories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
        
      });
        console.log(data);
    }

    return (
        <div>
             <form onSubmit={handleSubmit(handleLogin)} className='mr-20 mt-10 border-teal-400 mb-20 ml-20 ' >
                <h1 className='text-2xl font-bold text-white bg-black text-center pt-20'>Add New Product</h1>
                <div className=' p-20 border-teal-500 bg-black '>


<input name='name'{...register("name")}
                     type="text" placeholder="Product name" className="input input-ghost  w-full input-bordered " />



                    <input name='real' {...register("real")}
                     type="text" placeholder="realPrice" className="input input-ghost w-full input-bordered " />
                    <input name='catagory_name' {...register("catagory_name")}
                     type="text" placeholder="Nike/Addidas/Old school vans(category_name)" className="input input-ghost w-full input-bordered " required/>
                   
                    <input name='condition'{...register("condition")}
                     type="text" placeholder="excellent, good, fair" className="input input-ghost w-full input-bordered " />
               
                    <input name='phonenumber' {...register("realprice")}
                    type="text" placeholder="Phonenumber" className="input input-ghost w-full input-bordered  " required />


                    <input name='picture' {...register("picture")}
                     type="url" placeholder="Give Photourl here" className="input input-ghost w-full input-bordered  " required />

                    <input name='resell' {...register("resell")}
                     type="text" placeholder="resellprice" className="input input-ghost w-full input-bordered "  />

                    <input name='location' {...register("location")}
                    type="text" placeholder="Write your location here" className="input input-ghost w-full input-bordered "  />
                    <input name='productcatagory' {...register("productcatagory")}
                    type="text" placeholder="productcatagory" className="input input-ghost w-full input-bordered "  />
                    <input name='user' {...register("user")}
                    type="text" placeholder="Year Of User" className="input input-ghost w-full input-bordered "  />
                    <textarea name='comment'{...register("comment")}
                     className="textarea textarea-bordered h-24 w-full " placeholder="write your description here" required></textarea> <br />
                    <input type="date" id="start" name="date"
{...register("date")}
                        min="2022-01-01" max="2025-12-31" />
                    <input className='btn ' type="submit" value=" Add Product" />



                    
                </div>

            </form>


            {/* new data */}
            
        </div>
    );
};

export default AddProducts;