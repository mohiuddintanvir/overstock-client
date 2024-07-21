import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MoreDetailsShop = ({ categorys }) => {
    const { user } = useContext(AuthContext);
    const { name, img, price } = categorys;

    // Check if user is null or undefined
    if (!user) {
        return <div>Loading...</div>; // Or any other loading state/component
    }

    const email = user.email;

    const handleAddToCart = async () => {
        const cardData = {
            name,
            img,
            price,
            email,
        };

        const toastId = toast.loading('Adding product to cart...');

        try {
            const response = await fetch('https://over-stcok-server-usx2-ghtre5q05.vercel.app/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cardData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Card added successfully:', data);
                toast.update(toastId, { render: 'Product listed in cart successfully', type: 'success', isLoading: false, autoClose: 3000 });
            } else {
                console.error('Failed to add card:', response.statusText);
                toast.update(toastId, { render: 'Failed to add product to cart', type: 'error', isLoading: false, autoClose: 3000 });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.update(toastId, { render: 'An error occurred while adding the product to the cart', type: 'error', isLoading: false, autoClose: 3000 });
        }
    };

    return (
        <div className="container page-wrapper mt-5">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={img} alt={name} />
                            <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-company">{name}</span>
                                </div>
                                <div className="a-size">
                                    Available sizes: <span className="size">S, M, L, XL</span>
                                </div>
                            </div>
                        </div>
                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>
                            <button className="cart" onClick={handleAddToCart}>
                                <span className="price">€{price}</span>
                                <span className="add-to-cart">
                                    <span className="txt">Add to cart</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreDetailsShop;
