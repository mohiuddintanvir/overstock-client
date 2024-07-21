import React from 'react';
import Slider from 'react-slick';
import MoreDetailsShop from './MoreDetailsShop';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCard = ({ shop }) => {
    const { section_name, category } = shop;

    // Slider settings
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='p-4 md:p-6 lg:p-8'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mb-4 text-black'>{section_name}</h1>
            <div className="relative">
                <Slider {...settings}>
                    {category.map((categorys, index) => (
                        <div key={index} className='p-2'>
                            <MoreDetailsShop categorys={categorys} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductCard;
