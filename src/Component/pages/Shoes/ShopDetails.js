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
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='container mx-auto overflow-hidden'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mb-4 text-black text-center'>{section_name}</h1>
            <div className="relative mx-auto w-full lg:w-3/4">
                <Slider {...settings}>
                    {category.map((categorys, index) => (
                        <div key={index} className='px-2'>
                            <MoreDetailsShop categorys={categorys} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

// Custom next arrow
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} z-10 right-0 transform -translate-y-1/2 top-1/2`}
            style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

// Custom previous arrow
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} z-10 left-0 transform -translate-y-1/2 top-1/2`}
            style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

export default ProductCard;
