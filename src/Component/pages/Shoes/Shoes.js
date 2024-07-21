import React, { useEffect, useState } from 'react';
import ShopDetails from './ShopDetails';

import './shoes.css';

const Shoes = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch('https://over-stcok-server-usx2-ayq11llyv.vercel.app/shoes')
            .then(res => res.json())
            .then(data => setShoes(data));
    }, []);

    

    return (
        <div className='w-screen h-[120rem] bg-white ' id='shop'>
             
            
                {shoes.map(shop => (
                    <div className='' key={shop.id}>
                       
                        <ShopDetails shop={shop} />
                    </div>
                ))}
           
        </div>
    );
};

export default Shoes;
