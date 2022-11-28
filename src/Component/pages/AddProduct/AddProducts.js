import React from 'react';

const AddProducts = () => {
    return (
        <div>
             <form className='mr-20 mt-10 border-teal-400 mb-20 ml-20 ' >
                <h1 className='text-2xl font-bold text-white bg-black text-center pt-20'>Add New Product</h1>
                <div className=' p-20 border-teal-500 bg-black '>
                    <input name='productname' type="text" placeholder="Product name" className="input input-ghost  w-full input-bordered " />
                    <input name='realprice' type="text" placeholder="realPrice" className="input input-ghost w-full input-bordered " />
                    {/* radio button */}
                    <input name='condition' type="text" placeholder="excellent, good, fair" className="input input-ghost w-full input-bordered " />
               
                    <input name='phonenumber' type="text" placeholder="Phonenumber" className="input input-ghost w-full input-bordered  " required />
                    <input name='photourl' type="text" placeholder="Give Photourl here" className="input input-ghost w-full input-bordered  " required />
                    <input name='resellprice' type="text" placeholder="resellprice" className="input input-ghost w-full input-bordered "  />
                    <input name='Location' type="text" placeholder="Write your location here" className="input input-ghost w-full input-bordered "  />
                    <input name='productcatagory' type="text" placeholder="productcatagory" className="input input-ghost w-full input-bordered "  />
                    <input name='yearOfUser' type="text" placeholder="Year Of User" className="input input-ghost w-full input-bordered "  />
                    <textarea name='comment' className="textarea textarea-bordered h-24 w-full " placeholder="write your description here" required></textarea> <br />
                    <input type="date" id="start" name="date"

                        min="2022-01-01" max="2025-12-31" />
                    <input className='btn ' type="submit" value=" Add Product" />
                </div>

            </form>
        </div>
    );
};

export default AddProducts;