import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import Catagory from './Catagory/Catagory';
import ProductCatagory from './ProductCatagory/ProductCatagory';
import UnicSection from './Unica/UnicSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Advertisement></Advertisement>
           
            <UnicSection></UnicSection>
        </div>
    );
};

export default Home;