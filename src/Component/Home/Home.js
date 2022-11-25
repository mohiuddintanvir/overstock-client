import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import ProductCatagory from './ProductCatagory/ProductCatagory';
import UnicSection from './Unica/UnicSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <ProductCatagory></ProductCatagory>
            <UnicSection></UnicSection>
        </div>
    );
};

export default Home;