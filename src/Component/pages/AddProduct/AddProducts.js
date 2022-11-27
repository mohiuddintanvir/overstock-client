import React from 'react';

const AddProducts = () => {
    return (
        <div>
             <form className='mr-20 mt-10 border-teal-400 mb-20 ml-20 ' >
                <h1 className='text-2xl font-bold text-white bg-black text-center pt-20'>Add New Product</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-20 border-teal-500 bg-black '>
                    <input name='productname' type="text" placeholder="Product name" className="input input-ghost  w-full input-bordered " />
                    <input name='lastname' type="text" placeholder="Price" className="input input-ghost w-full input-bordered " />
                    <input name='phonenumber' type="text" placeholder="your photourl" className="input input-ghost w-full input-bordered  " required />
                    <input name='email' type="text" placeholder="your email" className="input input-ghost w-full input-bordered " readOnly />
                    <textarea name='comment' className="textarea textarea-bordered h-24 w-full " placeholder="Shere Your Review about product" required></textarea> <br />
                    <input type="date" id="start" name="date"

                        min="2022-01-01" max="2025-12-31" />
                    <input className='btn ' type="submit" value=" Add Product" />
                </div>

            </form>
        </div>
    );
};

export default AddProducts;