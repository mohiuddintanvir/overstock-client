import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import Catagory from './Catagory/Catagory';
import ProductCatagory from './ProductCatagory/ProductCatagory';
import UnicSection from './Unica/UnicSection';
import Shoes from '../pages/Shoes/Shoes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Shoes></Shoes>
        </div>
    );
};

export default Home;