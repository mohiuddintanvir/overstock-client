import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div >
            <div className='flex justify-center'>
<img className='w-1/2' src="https://blog.yourdesignjuice.com/wp-content/uploads/2019/05/dg-uxui-may2019.jpg" alt="" />
            </div>
        
        <button className="btn btn-outline btn-secondary text-white  mt-20 w-1/2"><Link to="/">Back to Home</Link></button>

        </div>
    );
};

export default ErrorPage;