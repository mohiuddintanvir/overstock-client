import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error=useRouteError();
    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-res-400'>{error.statusText || error.massage}</p>
            <h4 className="text-3xl">Please logout ant Login again</h4>
        </div>
    );
};

export default DisplayError;